import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.about-swiper', {
  speed: 500,
  slidesPerView: 2,
  direction: 'horizontal',
  loop: true,
  loopedSlides: 18,
  navigation: {
    nextEl: '.about-wrapper .custom-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      loop: true,
    },
    1440: {
      slidesPerView: 6,
      loop: true,
    },
  },
  touchMoveStopPropagation: false,
  mousewheel: true,
  grabCursor: true,
});

function updateSlideDimensions() {
  const aboutWrapperSlides = document.querySelectorAll(
    '.about-wrapper .swiper-slide'
  );
  const viewportWidth = window.innerWidth;

  if (viewportWidth <= 375) {
    aboutWrapperSlides.forEach(slide => {
      slide.style.width = '130px';
      slide.style.height = '130px';
    });
  } else if (viewportWidth >= 768) {
    aboutWrapperSlides.forEach(slide => {
      slide.style.width = '200px';
      slide.style.height = '200px';
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  updateSlideDimensions();
  const nextButton = document.querySelector('.about-wrapper .custom-next');
  if (nextButton) {
    nextButton.classList.remove('swiper-button-lock');
  }
});

window.addEventListener('resize', updateSlideDimensions);
