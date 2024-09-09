// import Swiper from 'swiper/bundle';
import Swiper from 'swiper';
// import { disabledNavigationButtons } from './disableNav';
import 'swiper/css';
import LazyLoad from 'vanilla-lazyload';

// const refsOption = {
//   prevButton: document.querySelector('.left-button'),
//   nextButton: document.querySelector('.right-button'),
//   prevIcon: document.querySelector('.left-icon'),
//   nextIcon: document.querySelector('.right-icon'),
// };

// const classOptions = {
//   disabledBtnClass: 'button-disabled-projects',
//   disabledIconClass: 'icon-disabled',
//   disabledAttribute: 'disabled',
// };

// const swiperProg = new Swiper('.projects-swiper', {
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   navigation: {
//     nextEl: '.right-button',
//     prevEl: '.left-button',
//   },
//   on: {
//     init: function () {
//       disabledNavigationButtons(this, refsOption, classOptions);
//     },
//     slideChange: function () {
//       disabledNavigationButtons(this, refsOption, classOptions);
//     },
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 16,
//     },
//     375: {
//       slidesPerView: 1,
//       spaceBetween: 16,
//     },
//     768: {
//       slidesPerView: 1,
//       spaceBetween: 16,
//     },
//     1440: {
//       slidesPerView: 1,
//       spaceBetween: 16,
//     },
//   },
// });

const nextButton = document.querySelector('.right-button');

const mySwiper = new Swiper('.projects-swiper', {
  speed: 600,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.right-button',
    prevEl: '.left-button',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

// refsOption.nextButton.disabled = false;
// refsOption.nextButton.classList.remove('swiper-button-disabled');
