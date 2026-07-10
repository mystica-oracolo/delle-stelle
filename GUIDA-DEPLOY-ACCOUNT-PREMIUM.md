# MYSTICA — Account gratuiti + Premium one-time online: guida al deploy

**Aggiornata in base ai chiarimenti:** nessun acquisto pregresso da migrare, app gratuita con registrazione libera (email o Google, nessuna carta richiesta a nessuno), Premium a pagamento unico (4,99€, non abbonamento), stato Premium non manipolabile dal browser.

---

## Come funziona il modello

- **Chiunque** può registrarsi gratis con email/password o Google. Zero carta di credito, zero costi, per lei e per te.
- L'app resta **utilizzabile gratuitamente** anche senza account (localStorage come oggi) — l'account serve per salvare il profilo online e per il Premium.
- Il **Premium è un pagamento singolo** di 4,99€: chi paga sblocca tutti i servizi per sempre, legato al suo account (non è un abbonamento, non scade, non si rinnova).
- Lo stato Premium (`premiumStatus/{uid}.premium`) è scrivibile **solo da un webhook server-side**, mai dal browser: le regole Firestore lo impediscono esplicitamente, quindi non è bypassabile modificando il codice del sito o localStorage.
- Per il webhook uso **Cloudflare Workers** invece delle Cloud Functions Firebase: fa lo stesso lavoro ma il piano gratuito **non richiede alcuna carta di credito** (le Cloud Functions Firebase invece obbligano al piano Blaze anche per restare nella fascia gratuita — per questo lo evitiamo).

---

## 1. Firebase Console — abilita Auth (nessuna carta richiesta, resta sul piano gratuito Spark)

1. https://console.firebase.google.com → progetto **mysticaoracoli** → **Authentication → Sign-in method**
2. Abilita **Email/Password**
3. Abilita **Google**
4. In **Settings → Authorized domains** aggiungi `mysticaoracoli.it`

## 2. Firestore — regole di sicurezza

1. **Firestore Database → Regole**
2. Incolla i blocchi di `firestore.rules` allegato **dentro** quelle già esistenti (mantieni le regole di `commenti`/`recensioni` già in uso, non sostituire tutto)
3. Pubblica

## 3. File da caricare sul sito (GitHub Pages)

Nella root del repo:
- `auth.js` (nuovo)
- `premium.js` (sostituisce quello attuale)
- `profilo-mistico.html` (sostituisce quello attuale, pagina pilota già collegata)

## 4. Webhook Stripe — Cloudflare Worker (gratis, nessuna carta)

1. Crea un account gratuito su https://dash.cloudflare.com (basta un'email — nessuna carta richiesta per i Workers sul piano free)
2. Installa Wrangler e fai login:
   ```bash
   npm install -g wrangler
   wrangler login
   ```
3. Nella cartella `cf-worker/` allegata:
   ```bash
   cd cf-worker
   wrangler deploy
   ```
   Otterrai un URL tipo `https://mystica-stripe-webhook.<tuo-account>.workers.dev`

4. Imposta i 3 segreti effettivamente usati dal worker (te li chiede uno alla volta):
   ```bash
   wrangler secret put STRIPE_WEBHOOK_SECRET
   wrangler secret put FIREBASE_SERVICE_ACCOUNT_JSON
   wrangler secret put FIREBASE_PROJECT_ID
   ```
   - `FIREBASE_PROJECT_ID` → `mysticaoracoli`
   - `FIREBASE_SERVICE_ACCOUNT_JSON` → il contenuto **intero** del file JSON che scarichi da Firebase Console → ⚙️ **Impostazioni progetto → Account di servizio → Genera nuova chiave privata**. Questo passaggio è gratuito e non richiede il piano Blaze: il Service Account serve solo a dare al Worker il permesso di scrivere su Firestore dall'esterno.
   - `STRIPE_WEBHOOK_SECRET` → lo ottieni al passo 5

   (Non servono `STRIPE_SECRET_KEY` né `FIREBASE_WEB_API_KEY`: il worker non li legge — il browser non chiama mai il Worker direttamente, solo Stripe lo fa via webhook server-to-server.)

## 5. Stripe — collega il webhook

1. https://dashboard.stripe.com → **Sviluppatori → Webhook → Aggiungi endpoint**
2. URL: quello ottenuto al passo 3 (il tuo `*.workers.dev`)
3. Evento da ascoltare: `checkout.session.completed`
4. Stripe genera un **Signing secret** (`whsec_...`) → usalo per `STRIPE_WEBHOOK_SECRET`
5. Verifica che il tuo **Payment Link** Stripe (`buy.stripe.com/6oU4gr6dXfiz5Pc8kC4ow01`) sia configurato come **pagamento singolo** e non ricorrente (Stripe Dashboard → Payment Links → verifica che il prodotto collegato sia "One time", non "Recurring")

## 6. Test end-to-end

1. Apri `profilo-mistico.html` → "✦ Accedi" (basso a sinistra) → registrati con email o Google — **nessuna carta richiesta**
2. Compila il profilo mistico → controlla su Firestore Console che sia comparso `users/<uid>`
3. Apri il modal Premium → completa un pagamento Stripe di test (modalità test del tuo account Stripe)
4. Entro pochi secondi `premiumStatus/<uid>.premium` diventa `true` e la UI si sblocca da sola, senza reload
5. Accedi da un altro dispositivo/browser con lo stesso account → profilo e Premium compaiono subito, senza dover reinserire nulla

---

## Le altre 52 pagine

`profilo-mistico.html` è la pagina pilota: lo stesso identico pattern premium (duplicato localmente) è presente in altre 52 pagine del sito (oroscopo, tarocchi, rune, ecc.), ognuna scollegata da `premium.js`. Confermami che il flusso funziona su questa pagina e poi applico lo stesso pattern a tutte le altre — dimmi se le vuoi tutte insieme o una alla volta.
