
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

  

  const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;


function updateSliderPosition() {
  slider.style.transform = `translateX(-${slideIndex * 33.33}%)`;
}


function nextSlide() {
  slideIndex = (slideIndex + 1) % (slides.length - 2);
  updateSliderPosition();
}


function prevSlide() {
  slideIndex = slideIndex === 0 ? slides.length - 3 : slideIndex - 1;
  updateSliderPosition();
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/meal_29_2_1.jpg',
  
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
