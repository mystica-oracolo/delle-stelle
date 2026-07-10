/**
 * MYSTICA — Cloudflare Worker: webhook Stripe → attivazione Premium reale
 * Alternativa GRATUITA e senza carta di credito alle Cloud Functions Firebase
 * (che richiederebbero il piano a pagamento Blaze solo per essere ospitate).
 *
 * Cosa fa:
 *  1. Riceve l'evento da Stripe quando un pagamento va a buon fine
 *  2. Verifica che la richiesta arrivi davvero da Stripe (firma HMAC)
 *  3. Scrive premiumStatus/{uid} = {premium:true, ...} su Firestore
 *     usando un Service Account Google (permessi di scrittura amministrativi,
 *     bypassano le regole di sicurezza — per questo il browser non può farlo)
 *
 * Il piano gratuito di Cloudflare Workers non richiede alcuna carta di credito.
 */

/* ── Verifica firma webhook Stripe (implementazione manuale, no SDK Node) ── */
async function verifyStripeSignature(rawBody, sigHeader, secret) {
  const parts = Object.fromEntries(
    sigHeader.split(',').map(p => p.split('='))
  );
  const timestamp = parts.t;
  const signature = parts.v1;
  const signedPayload = `${timestamp}.${rawBody}`;

  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sigBuf = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signedPayload));
  const expected = Array.from(new Uint8Array(sigBuf)).map(b => b.toString(16).padStart(2, '0')).join('');

  // Confronto a tempo costante
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  return diff === 0;
}

/* ── Ottiene un access token Google firmando un JWT col Service Account ── */
async function getGoogleAccessToken(env) {
  const sa = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT_JSON);
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/datastore',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const b64url = (obj) => btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const unsigned = `${b64url(header)}.${b64url(claim)}`;

  const pemBody = sa.private_key.replace(/-----[^-]+-----/g, '').replace(/\s/g, '');
  const keyData = Uint8Array.from(atob(pemBody), c => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8', keyData, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']
  );
  const sigBuf = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, new TextEncoder().encode(unsigned));
  const sig = btoa(String.fromCharCode(...new Uint8Array(sigBuf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const jwt = `${unsigned}.${sig}`;

  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });
  const data = await resp.json();
  if (!data.access_token) throw new Error('Token Google non ottenuto: ' + JSON.stringify(data));
  return data.access_token;
}

/* ── Scrive premiumStatus/{uid} su Firestore via REST API ── */
async function activatePremium(env, uid, session) {
  const token = await getGoogleAccessToken(env);
  const projectId = env.FIREBASE_PROJECT_ID;
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/premiumStatus/${uid}`;

  const body = {
    fields: {
      premium: { booleanValue: true },
      activatedAt: { timestampValue: new Date().toISOString() },
      source: { stringValue: 'stripe' },
      stripeSessionId: { stringValue: session.id || '' },
      stripeCustomerEmail: { stringValue: (session.customer_details && session.customer_details.email) || '' }
    }
  };

  const resp = await fetch(url + '?updateMask.fieldPaths=premium&updateMask.fieldPaths=activatedAt&updateMask.fieldPaths=source&updateMask.fieldPaths=stripeSessionId&updateMask.fieldPaths=stripeCustomerEmail', {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!resp.ok) {
    const errText = await resp.text();
    throw new Error(`Scrittura Firestore fallita: ${resp.status} ${errText}`);
  }
}

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') return new Response('Metodo non consentito', { status: 405 });

    const rawBody = await request.text();
    const sigHeader = request.headers.get('stripe-signature');
    if (!sigHeader) return new Response('Firma mancante', { status: 400 });

    const valid = await verifyStripeSignature(rawBody, sigHeader, env.STRIPE_WEBHOOK_SECRET);
    if (!valid) return new Response('Firma non valida', { status: 400 });

    const event = JSON.parse(rawBody);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const uid = session.client_reference_id;

      if (!uid) {
        console.warn('Pagamento senza client_reference_id: non collegabile a un account.');
        return new Response('ok (no uid)', { status: 200 });
      }

      try {
        await activatePremium(env, uid, session);
      } catch (err) {
        console.error(err.message);
        return new Response('Errore interno', { status: 500 });
      }
    }

    return new Response('ok', { status: 200 });
  }
};
