import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });

import 'swiper/css';

// const swiper = new Swiper();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.right-button',
    prevEl: '.left-button',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

console.log('Hello!');
