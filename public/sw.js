importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
workbox
.precaching
.precacheAndRoute([
  {"revision":"21e43b10ddc470d475a011dc921ed290","url":"index.html"},
  {"revision":"4b069448f53640f50eef7a166162ba37","url":"logo192.png"},
  {"revision":"415f79e9d1c03c00dd754496a34ecc3f","url":"logo512.png"}
  ]);