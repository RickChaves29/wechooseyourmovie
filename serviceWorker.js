const serviceWebApp = "we-choose-your-movie-v1";
const staticFiles = [
  "/",
  "/index.html",
  "/styles/global.css",
  "/styles/reset.css",
  "/js/main.js",
  "assets/logo.svg",
  "assets/poster.svg",
];
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then((register) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          register.scope
        );
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}

self.ServiceWorker("install", (event) => {
  event.waitUntil(
    caches.open(serviceWebApp).then((cache) => {
      cache.addAll(staticFiles);
    })
  );
});
