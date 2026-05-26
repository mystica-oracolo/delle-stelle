/* ═══════════════════════════════════════════════════════════════
   MYSTICA — Service Worker v2
   Strategia: Cache-First per l'app shell + Network-First per CDN
   © MYSTICA — Oracolo delle Stelle
   ═══════════════════════════════════════════════════════════════ */

const CACHE_NAME    = 'mystica-v2';
const OFFLINE_URL   = './index.html';

/* Asset da precachare all'installazione (app shell) */
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
];

/* Pattern CDN da cachare solo dopo il primo accesso (network-first) */
const CDN_PATTERNS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com',
];

/* ── INSTALL ────────────────────────────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())        // attiva subito senza attendere chiusura vecchie tabs
      .catch(err => console.warn('[SW] Precache parziale:', err))
  );
});

/* ── ACTIVATE ───────────────────────────────────────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)    // elimina cache vecchie
          .map(k => {
            console.log('[SW] Elimino cache obsoleta:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim())      // prende il controllo di tutte le tabs aperte
  );
});

/* ── FETCH ──────────────────────────────────────────────────── */
self.addEventListener('fetch', event => {
  const req = event.request;

  // Ignora richieste non-GET e chrome-extension
  if(req.method !== 'GET') return;
  if(req.url.startsWith('chrome-extension://')) return;
  if(req.url.startsWith('blob:')) return;

  const url = new URL(req.url);
  const isCDN = CDN_PATTERNS.some(p => url.hostname.includes(p));
  const isHTML = req.headers.get('accept')?.includes('text/html');
  const isMainDoc = isHTML && url.pathname.match(/\.(html?)?$/i);

  if(isCDN){
    /* CDN — Network-first con fallback alla cache */
    event.respondWith(networkFirst(req));
  } else if(isMainDoc || url.pathname === '/' || url.pathname.endsWith('.html')){
    /* Documento principale — Cache-first (app shell) */
    event.respondWith(cacheFirst(req));
  } else {
    /* Tutto il resto — Stale-While-Revalidate */
    event.respondWith(staleWhileRevalidate(req));
  }
});

/* ── STRATEGIE DI CACHE ─────────────────────────────────────── */

/**
 * Cache-First: serve dalla cache, se non c'è va in rete e poi cacha.
 * Ideale per l'app shell (HTML, CSS, JS).
 */
async function cacheFirst(req){
  const cached = await caches.match(req);
  if(cached) return cached;
  try {
    const net = await fetch(req);
    if(net.ok){
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, net.clone());
    }
    return net;
  } catch(e){
    // Offline e non in cache → restituisce la pagina offline
    const fallback = await caches.match(OFFLINE_URL);
    return fallback || new Response('<h1>MYSTICA offline</h1><p>Connettiti a internet per la prima apertura.</p>', {
      headers: {'Content-Type': 'text/html; charset=utf-8'}
    });
  }
}

/**
 * Network-First: prova la rete, fallback alla cache.
 * Ideale per Google Fonts e CDN che si aggiornano frequentemente.
 */
async function networkFirst(req){
  try {
    const net = await fetch(req);
    if(net.ok){
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, net.clone());
    }
    return net;
  } catch(e){
    const cached = await caches.match(req);
    return cached || Response.error();
  }
}

/**
 * Stale-While-Revalidate: serve subito dalla cache mentre aggiorna in background.
 * Ideale per immagini, icone e asset non critici.
 */
async function staleWhileRevalidate(req){
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);

  const networkFetch = fetch(req).then(net => {
    if(net && net.ok && net.type !== 'opaque'){
      cache.put(req, net.clone());
    }
    return net;
  }).catch(() => null);

  return cached || await networkFetch || Response.error();
}

/* ── MESSAGGI DAL CLIENT ────────────────────────────────────── */
self.addEventListener('message', event => {
  // Il client può mandare { type: 'SKIP_WAITING' } per forzare l'aggiornamento
  if(event.data?.type === 'SKIP_WAITING'){
    self.skipWaiting();
  }

  // Risposta a ping (utile per debug e health-check)
  if(event.data?.type === 'PING'){
    event.ports[0]?.postMessage({
      type: 'PONG',
      cache: CACHE_NAME,
      ts: Date.now()
    });
  }
});
