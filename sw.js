var version = 2;
var name = "wpo_workshop::" + version;

self.addEventListener("install", function (event) {
    console.log("SW " + version + " installed at", new Date().toLocaleTimeString());
    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    console.log("SW " + version + " activated at", new Date().toLocaleTimeString());
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.filter(function (cacheName) {
            return cacheName !== name;
        }).map(function (cacheName) {
            return caches.delete(cacheName);
        }));
    }));
});

self.addEventListener("fetch", function (event) {
    event.respondWith(caches.open(name).then(function (cache) {
        return cache.match(event.request).then(function (response) {
            var fetchPromise = fetch(event.request).then(function (networkResponse) {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });

            return response || fetchPromise;
        });
    }));
});