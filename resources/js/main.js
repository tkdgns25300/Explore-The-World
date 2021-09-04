/* ==================== Swiper JS : Main Section ==================== */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 600,
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});


/* ==================== FullPage : Home <-> Main ==================== */

$(document).ready(function() {
	$('#fullpage').fullpage({
    scrollingSpeed: 1900,
    // autoScrolling: false
	});
});


/* ==================== ScrollReveal ==================== */

const sr = ScrollReveal({
  distance: '1rem',
  duration: 1500,
  reset: true
});

sr.reveal('.nav', {
  origin: 'top'
})

sr.reveal('.home__icons', {
  origin: 'left',
})

sr.reveal('.home__title, .home__subtitle', {
  origin: 'left',
  interval: 200,
  delay: 500
})