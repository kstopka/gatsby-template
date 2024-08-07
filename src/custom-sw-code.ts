self.addEventListener("message", (event: MessageEvent) => {
  if (event.data === "SKIP_WAITING") {
    (self as ServiceWorkerGlobalScope).skipWaiting();
  }
});

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil((self as ServiceWorkerGlobalScope).skipWaiting());
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil((self as ServiceWorkerGlobalScope).clients.claim());
});

self.addEventListener("controllerchange", () => {
  if (navigator.serviceWorker.controller) {
    window.location.reload();
  }
});
