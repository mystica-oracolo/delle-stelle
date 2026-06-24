// ============================================================
// MYSTICA ORACOLI — Service Worker
// Versione cache: incrementa questo valore ad ogni deploy
// ============================================================
const CACHE_NAME = 'mystica-v363';

// File da mettere in cache per il funzionamento offline
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192-v2.png',
  './apple-touch-icon-v2.png',
  // Pagine satellite
  './about.html',
  './astrologia-avanzata.html',
  './astrologia-vedica.html',
  './bazi-cinese.html',
  './cicli-tempo.html',
  './community.html',
  './contatti.html',
  './divinazione-alternativa.html',
  './enciclopedia.html',
  './gene-keys.html',
  './guida-i-ching.html',
  './guida-tarocchi.html',
  './human-design.html',
  './mente-energia.html',
  './numerologia-simboli.html',
  './oroscopo-cinese.html',
  './oroscopo-segni.html',
  './ouija.html',
  './pentacoli-salomone.html',
  './pietre-magiche.html',
  './pratica-quotidiana.html',
  './pratiche.html',
  './privacy.html',
  './significato-rune.html',
  './sogni.html',
  './strega.html',
  './termini.html',
  './tradizioni-spirituali.html',
  './zi-wei-dou-shu.html',
  // Icone home — nuove immagini aggiunte
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
  './images/icone/home/voodoo-hoodoo.webp',
  // Chunk JS lazy-loaded — necessari per funzionamento offline
  './core.js',
  './mystica.css',
  './lazy-load.js',
  './tarocchi.js',
  './oracoli.js',
  './totem.js',
  './angeli.js',
  './geomanzia.js',
  './numerologia.js',
  './ore-specchio.js',
  './luna.js',
  './pianeti.js',
  './rune.js',
  './iching.js',
  './rituali.js',
  './extra.js',
  './commenti.js',
  './consulente.js'
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
