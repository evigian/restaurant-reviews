const cacheName = 'restaurant-reviews';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll([
  '/restaurant-reviews/index.html',
  '/restaurant-reviews/restaurant.html',
  '/restaurant-reviews/css/styles.css',
  '/restaurant-reviews/js/main.js',
  '/restaurant-reviews/js/dbhelper.js',
  '/restaurant-reviews/js/restaurant_info.js',
  '/restaurant-reviews/data/restaurants.json',
  '/restaurant-reviews/img/1.jpg',
  '/restaurant-reviews/img/2.jpg',
  '/restaurant-reviews/img/3.jpg',
  '/restaurant-reviews/img/4.jpg',
  '/restaurant-reviews/img/5.jpg',
  '/restaurant-reviews/img/6.jpg',
  '/restaurant-reviews/img/7.jpg',
  '/restaurant-reviews/img/8.jpg',
  '/restaurant-reviews/img/9.jpg',
  '/restaurant-reviews/img/10.jpg',
  '/restaurant-reviews/img/food.png',
  '/restaurant-reviews/restaurant.html?id=1',
  '/restaurant-reviews/restaurant.html?id=2',
  '/restaurant-reviews/restaurant.html?id=3',
  '/restaurant-reviews/restaurant.html?id=4',
  '/restaurant-reviews/restaurant.html?id=5',
  '/restaurant-reviews/restaurant.html?id=6',
  '/restaurant-reviews/restaurant.html?id=7',
  '/restaurant-reviews/restaurant.html?id=8',
  '/restaurant-reviews/restaurant.html?id=9',
  '/restaurant-reviews/restaurant.html?id=10'
]);
      })
  );
});


self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});

