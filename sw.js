/**
 * Service Worker for Celestial BaZi Metaphysics Engine (PWA)
 * Offline-First Caching Strategy for Instant App Load
 */

const CACHE_NAME = 'celestial-bazi-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/bazi-engine.js',
  './js/portrait-engine.js',
  './js/luck-engine.js',
  './js/iching-engine.js',
  './js/synastry-engine.js',
  './js/visual-alchemy.js',
  './js/chart.js',
  './js/i18n.js',
  './data/ditiansui.js',
  './data/sanming.js',
  './data/qiongtong.js',
  './data/zipingzhenquan.js',
  './data/yuanhai.js',
  './data/shenfeng.js',
  './data/yuzhao.js',
  './data/lixuzhong.js',
  './data/iching.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.tailwindcss.com'
];

// Install Event: Pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA Precache partial warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First with Network Fallback & Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch update in background (stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }

      // Network fallback
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || (networkResponse.status !== 200 && networkResponse.type !== 'opaque')) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Offline fallback for navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html').then(res => res || caches.match('./'));
        }
      });
    })
  );
});
