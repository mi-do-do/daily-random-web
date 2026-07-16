const CACHE = 'daily-random-v12';
const CORE = ['./','./index.html','./styles.css?v=12','./app.js?v=12','./manifest.webmanifest'];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
});
self.addEventListener('activate', event => event.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim())
));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const isCore = event.request.mode === 'navigate' || CORE.some(path => new URL(path, self.location).href === event.request.url);
  if (!isCore) return;
  event.respondWith(fetch(event.request).then(response => {
    const copy=response.clone();
    caches.open(CACHE).then(cache => cache.put(event.request,copy));
    return response;
  }).catch(() => caches.match(event.request)));
});
