self.addEventListener('install', function(event) {
  console.log('Service Worker installed.');
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
});
