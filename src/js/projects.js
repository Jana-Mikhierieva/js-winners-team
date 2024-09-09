// import Swiper from 'swiper/bundle';
import Swiper from 'swiper';
import 'swiper/css';
import LazyLoad from 'vanilla-lazyload';

const nextButton = document.querySelector('.right-button');

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  speed: 600,
  breakpointsBase: 'container',
  centeredSlides: true,
  maxBackfaceHiddenSlides: 3,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.right-button',
    prevEl: '.left-button',
  },

  // on: {
  //   init: function () {
  //     disabledNavigationButtonsVit(this, refsOption, classOptions);
  //   },
  //   slideChange: function () {
  //     disabledNavigationButtonsVit(this, refsOption, classOptions);
  //   },
  // },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //   },
  //   375: {
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //   },
  //   768: {
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //   },
  //   1440: {
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //   },
  // },
});

// function disabledNavigationButtonsVit(el, refsOption, classOptions) {
//   const { prevButton, nextButton, prevIcon, nextIcon } = refsOption;
//   const { disabledBtnClass, disabledIconClass, disabledAttribute } =
//     classOptions;

//   const toggleClass = (element, condition, className) => {
//     condition
//       ? element.classList.add(className)
//       : element.classList.remove(className);
//   };

//   const toggleAttribute = (element, condition, attrName) => {
//     condition
//       ? element.setAttribute(attrName, 'true')
//       : element.removeAttribute(attrName);
//   };

//   toggleClass(prevButton, el.isBeginning, disabledBtnClass);
//   toggleClass(prevIcon, el.isBeginning, disabledIconClass);
//   toggleAttribute(prevButton, el.isBeginning, disabledAttribute);

//   toggleClass(nextButton, el.isEnd, disabledBtnClass);
//   toggleClass(nextIcon, el.isEnd, disabledIconClass);
//   toggleAttribute(nextButton, el.isEnd, disabledAttribute);
// }

nextButton.disabled = false;
nextButton.classList.remove('swiper-button-disabled');
// refsOption.nextIcon.classList.remove('icon-disabled');
