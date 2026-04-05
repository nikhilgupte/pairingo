const CACHE_NAME = 'pairingo-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/styles.css',
  '/logo.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

// Network-first: always try network, fall back to cache when offline
self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  if (event.request.url.includes('ws')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request)
        .then(cached => cached || caches.match('/index.html'))
      )
  );
});
