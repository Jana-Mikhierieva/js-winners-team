import Swiper from 'swiper/bundle';
import 'swiper/css';
import LazyLoad from 'vanilla-lazyload';

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
