/**
 * Service Worker for Celestial BaZi Metaphysics Engine (PWA)
 * Offline-First Caching Strategy for Instant App Load
 */

const CACHE_NAME = 'celestial-bazi-v6';
const STATIC_ASSETS = [
  './',
  './index.html',
  './fengshui.html',
  './manifest.json',
  './css/style.css',
  './js/app.js',
  './js/bazi-engine.js',
  './js/fengshui-engine.js',
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
  './data/tianji.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './lib/html2pdf.bundle.min.js',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
];

// Install Event: Pre-cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        STATIC_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('PWA Precache asset warning for ' + url + ':', err);
          })
        )
      );
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

// Fetch Event: Network-First for HTML/JS/CSS, Cache-First for static assets
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isCodeOrDoc = event.request.mode === 'navigate' ||
                      url.pathname.endsWith('.html') ||
                      url.pathname.endsWith('.js') ||
                      url.pathname.endsWith('.css');

  if (isCodeOrDoc) {
    // Network-first so code updates take effect immediately on reload
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html').then(res => res || caches.match('./'));
          }
        });
      })
    );
    return;
  }

  // Cache-first for images, fonts, icons, etc.
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || (networkResponse.status !== 200 && networkResponse.type !== 'opaque')) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
