// ĐỔI TÊN CACHE ĐỂ KHÔNG BỊ TRÙNG VỚI APP CŨ
const CACHE_NAME = 'ban-hang-app-v1'; 

// Danh sách các file cần lưu offline (Không có amlich-hnd.js)
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});