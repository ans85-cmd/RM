self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('rm-app').then(cache => cache.addAll(['index.html']))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
