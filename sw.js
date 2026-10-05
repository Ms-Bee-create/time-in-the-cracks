// Deliberately does no caching. Android only offers a real "Install app"
// (full screen, own icon) when a service worker with a fetch handler is
// registered, so this passes every request straight through to the network —
// which also means a new deploy is always what loads, never a stale copy.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
