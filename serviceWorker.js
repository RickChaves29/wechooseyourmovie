const serviceWebApp = "we-choose-your-movie-v1";
const staticFiles = [
  "/serviceWorker.js",
  "/index.html",
  "/styles/global.css",
  "/styles/reset.css",
  "/js/main.js",
  "/wechooseyourmovie/assets/logo.svg",
  "/wechooseyourmovie/assets/poster.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(serviceWebApp).then((cache) => {
      cache.addAll(staticFiles);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
