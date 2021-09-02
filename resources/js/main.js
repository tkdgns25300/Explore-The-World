/* ==================== Swiper JS : Main Section ==================== */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 600,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});


/* ==================== FullPage.js : Home <-> Main ==================== */

new fullpage('#fullpage', {
  //options here
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  autoScrolling:true,
  scrollHorizontally: true
});

//methods
fullpage_api.setAllowScrolling(false);

