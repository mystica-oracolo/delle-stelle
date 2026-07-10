// ============================================================
// MYSTICA ORACOLI — Service Worker
// Versione cache: incrementa questo valore ad ogni deploy
// ============================================================
const CACHE_NAME = 'mystica-v404';

// File da mettere in cache per il funzionamento offline
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192-v2.png',
  './apple-touch-icon-v2.png',
  // ── Oracoli principali (nuovi HTML standalone) ──
  './tarocchi.html',
  './oroscopo.html',
  './compatibilita.html',
  './profilo-mistico.html',
  './rune.html',
  './iching.html',
  './numerologia.html',
  './ore-specchio.html',
  './totem.html',
  './angeli.html',
  './geomanzia.html',
  './oracoli.html',
  './luna-pianeti.html',
  // ── Energia & Spazio ──
  './energia-chakra.html',
  './mente-energia.html',
  './pietre-magiche.html',
  './strumenti.html',
  // ── Magia ──
  './magia-bianca.html',
  './magia-rossa.html',
  './magia-nera.html',
  './malocchio.html',
  './sigilli-salomone.html',
  './stregoneria-wicca.html',
  './negromanzia.html',
  './alchimia.html',
  './60-magie.html',
  // ── Astrologia ──
  './astrologia-avanzata.html',
  './astrologia-vedica.html',
  './bazi-cinese.html',
  './zi-wei-dou-shu.html',
  './cicli-tempo.html',
  './human-design.html',
  './gene-keys.html',
  './oroscopo-cinese.html',
  './oroscopo-segni.html',
  './oroscopo-zodcinese.html',
  // ── Esoterismo & Tradizioni ──
  './cabala.html',
  './ermetismo.html',
  './divinazione-alternativa.html',
  './tradizioni-spirituali.html',
  './numerologia-simboli.html',
  './pentacoli-salomone.html',
  './viaggio-astrale.html',
  './sogni.html',
  './libro-delle-risposte.html',
  './bibliomanzia-tasseomanzia.html',
  // ── Guide & Enciclopedia ──
  './enciclopedia.html',
  './pratiche.html',
  './ouija.html',
  './strega.html',
  './guida-i-ching.html',
  './guida-tarocchi.html',
  './significato-rune.html',
  './pratica-quotidiana.html',
  // ── Archivio & Community ──
  './archivio.html',
  './blog.html',
  './community.html',
  // ── Info ──
  './about.html',
  './contatti.html',
  './privacy.html',
  './termini.html',
  // ── JS ancora attivi ──
  './sw.js',
  './commenti.js',
  './consulente.js',
  './auth.js',
  './premium.js',
  './mystica.css',
  // ── Icone home ──
  './images/icone/home/astrologia-avanzata.webp',
  './images/icone/home/cartomanzia.webp',
  './images/icone/home/lenormand.webp',
  './images/icone/home/oracolo-angeli.webp',
  './images/icone/home/oracolo-celti.webp',
  './images/icone/home/specchio-nero.webp',
  './images/icone/home/cromomanzia.webp',
  './images/icone/home/meditazione.webp',
  './images/icone/home/pranayama.webp',
  './images/icone/home/ipnosi.webp',
  './images/icone/home/eft-tapping.webp',
  './images/icone/home/sincronicita.webp',
  './images/icone/home/voodoo-hoodoo.webp'
];

// ── INSTALL ──────────────────────────────────────────────────
// Pre-cacha le risorse e attiva subito il nuovo SW
// senza aspettare che tutte le tab vengano chiuse
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
      .then(() => self.skipWaiting()) // ← attivazione immediata
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────
// Elimina le vecchie cache e prende controllo di tutte le tab
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim()) // ← controlla subito tutte le tab aperte
  );
});

// ── FETCH ────────────────────────────────────────────────────
// Strategia: Network First per index.html (sempre aggiornato),
// Cache First per le risorse statiche (icone, manifest)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Solo richieste same-origin
  if (url.origin !== self.location.origin) return;

  // index.html: sempre network first, fallback cache
  if (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Aggiorna la cache con la versione fresca
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // auth.js e premium.js: network first, fallback cache.
  // Sono i file che gestiscono login e pagamento Premium: un utente non deve
  // MAI restare bloccato su una versione vecchia dopo un tuo aggiornamento
  // (stesso motivo per cui index.html è già network first).
  if (url.pathname.endsWith('/auth.js') || url.pathname.endsWith('/premium.js')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Risorse statiche: cache first, fallback network
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});

// ── MESSAGE ──────────────────────────────────────────────────
// Gestisce il messaggio SKIP_WAITING inviato dall'app
// quando l'utente clicca "Ricarica ora" nel banner
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ── PUSH ─────────────────────────────────────────────────────
self.addEventListener('push', event => {
  let data = { title: '✨ MYSTICA', body: 'Il tuo messaggio delle stelle ti aspetta.', icon: './icon-192-v2.png', badge: './icon-192-v2.png', tag: 'mystica-daily' };
  if (event.data) { try { data = { ...data, ...event.data.json() }; } catch(e) {} }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body, icon: data.icon, badge: data.badge, tag: data.tag,
      vibrate: [200, 100, 200], data: { url: './' }
    })
  );
});

// ── NOTIFICATION CLICK ───────────────────────────────────────
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) { if ('focus' in client) return client.focus(); }
      return clients.openWindow(targetUrl);
    })
  );
});
