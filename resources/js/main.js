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
	});
});


/* ==================== ScrollReveal ==================== */
window.sr = ScrollReveal({ reset: true });

sr.reveal('.home__title', {
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.main');