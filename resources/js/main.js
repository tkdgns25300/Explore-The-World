/* ==================== Swiper JS : Main Section ==================== */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
















































// Full Page JS : Home <---> Main

// new fullpage('#fullpage', {
//     //이동
//     menu: '#menu',
//     lockAnchors: false,
//     anchors:['firstPage', 'secondPage'],
//     navigation: false,
//     navigationPosition: 'right',
//     navigationTooltips: ['firstSlide', 'secondSlide'],
//     showActiveTooltip: false,
//     slidesNavigation: false,
//     slidesNavPosition: 'bottom',

//     //스크롤
//     css3: true,
//     scrollingSpeed: 700,
//     autoScrolling: true,
//     fitToSection: true,
//     fitToSectionDelay: 1000,
//     scrollBar: false,
//     easing: 'easeInOutCubic',
//     easingcss3: 'ease',
//     loopBottom: false,
//     loopTop: false,
//     loopHorizontal: true,
//     continuousVertical: false,
//     continuousHorizontal: false,
//     scrollHorizontally: false,
//     interlockedSlides: false,
//     dragAndMove: false,
//     offsetSections: false,
//     resetSliders: false,
//     fadingEffect: false,
//     normalScrollElements: '#element1, .element2',
//     scrollOverflow: false,
//     scrollOverflowReset: false,
//     scrollOverflowOptions: null,
//     touchSensitivity: 15,
//     bigSectionsDestination: null,

//     //접근성
//     keyboardScrolling: true,
//     animateAnchor: true,
//     recordHistory: true,

//     //디자인
//     controlArrows: true,
//     verticalCentered: true,
//     sectionsColor : ['#ccc', '#fff'],
//     paddingTop: '3em',
//     paddingBottom: '10px',
//     fixedElements: '#header, .footer',
//     responsiveWidth: 0,
//     responsiveHeight: 0,
//     responsiveSlides: false,
//     parallax: false,
//     parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
//     dropEffect: false,
//     dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
//     waterEffect: false,
//     waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
//     cards: false,
//     cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

//     //맞춤 선택자
//     sectionSelector: '.section',
//     slideSelector: '.slide',

//     lazyLoading: true,

// //사건(이벤트)
// onLeave: function(origin, destination, direction){},
// afterLoad: function(origin, destination, direction){},
// afterRender: function(){},
// afterResize: function(width, height){},
// afterReBuild: function(){},
// afterResponsive: function(isResponsive){},
// afterSlideLoad: function(section, origin, destination, direction){},
// onSlideLeave: function(section, origin, destination, direction){}
// });