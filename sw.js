self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('speedometer-app').then((cache) => cache.addAll([
        '/speedometer/',
        '/speedometer/index.html',
        '/speedometer/meter/index.js',
        '/speedometer/meter/index.html',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });
  