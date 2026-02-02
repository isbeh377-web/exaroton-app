self.addEventListener("install", event => {
    self.skipWaiting(); // Activar inmediatamente
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim()); // Tomar control de todas las pestañas
});

self.addEventListener("fetch", event => {
    // No hacemos nada, todo carga en línea
});
