import Swiper from 'swiper/bundle'; 

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 6,
    direction: 'horizontal',
    loop: true,
    loopedSlides: 6,
    navigation: {
        nextEl: '.custom-next',
    },
    keyboard: {
    enabled: true,
    onlyInViewport: false,
    },
    breakpoints: {
            320: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 6,
            },
    },
    touchMoveStopPropagation: false,
    mousewheel: true,
    grabCursor: true,
});
document.addEventListener('DOMContentLoaded', function () {
  const nextButton = document.querySelector('.custom-next');
  nextButton.classList.remove('swiper-button-lock');
});
