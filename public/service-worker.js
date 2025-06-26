const CACHE_NAME = 'maplibre-pwa-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/main.js',
  '/manifest.json',
  'https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
