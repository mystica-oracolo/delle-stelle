// ============================================================
// MYSTICA ORACOLI — Service Worker
// Versione cache: incrementa questo valore ad ogni deploy
// ============================================================
const CACHE_NAME = 'mystica-v1.5';

// File da mettere in cache per il funzionamento offline
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './apple-touch-icon.png'
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
