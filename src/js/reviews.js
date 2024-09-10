import { getReview } from './api';
import Swiper from 'swiper/bundle';
import LazyLoad from 'vanilla-lazyload';
import $ from 'jquery';
import 'magnific-popup';
import { disabledNavigationButtons } from './disableNav';

// Ініціалізація бібліотеки vanilla-lazyload
const loadingDeferredInstance = new LazyLoad({
  elements_selector: '.lazy__load',
});

// Отримання посилання на контейнер у якому відрендериться відповідь з бекенду
const reviewsContainer = document.querySelector('.js-reviews');

// Об'єкт налаштувань з посиланнями на елементи які треба відслідковувати для зміни класу для функції disabledNavigationButtons
const refsOption = {
  prevButton: document.querySelector('.reviews__btn--prev'),
  nextButton: document.querySelector('.reviews__btn--next'),
  prevIcon: document.querySelector('.js-review-icon-prev'),
  nextIcon: document.querySelector('.js-review-icon-next'),
};

// Об'єкт налаштувань з класами які треба змінювати на елементах у функції disabledNavigationButtons
const classOptions = {
  disabledBtnClass: 'reviews__btn--disabled',
  disabledIconClass: 'reviews__icon--disabled',
  disabledAttribute: 'disabled',
};

// Функція ініціалізації
function initializeSwiper() {
  // Ініціалізіція Swiper
  const swiperRev = new Swiper('.reviews-swiper', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
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
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      init: function () {
        disabledNavigationButtons(this, refsOption, classOptions);
      },
      slideChange: function () {
        disabledNavigationButtons(this, refsOption, classOptions);
      },
      reachBeginning: function () {
        disabledNavigationButtons(this, refsOption, classOptions);
      },
      reachEnd: function () {
        disabledNavigationButtons(this, refsOption, classOptions);
      },
    },
  });

  // Ініціалізація Magnific Popup
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
  });
}

// Запуск коду після завантаження сторінки у методі який відпрацює за завантаження після того як будуть завантажені стилі,html і т.д
window.onload = async () => {
  const reviews = await getReview();
  createMarkupReviews(renderMarkupReviews, reviews);
  initializeSwiper();
  loadingDeferredInstance.update();
};

// Функція для рендерингу розмітки відгуків
function renderMarkupReviews(array) {
  return array
    .map(
      (ar, index) => `
        <li class="reviews__item swiper-slide">
            <a href="#review${index}" class="open-popup-link">
                <img 
                    class="lazy__load reviews__image"
                    data-src="${ar.avatar_url}" 
                    alt="commentator's photo" 
                />
                <h3 class="reviews__title">${ar.author}</h3>
                <p class="reviews__text">${ar.review}</p>
            </a>
            <div id="review${index}" class="mfp-hide">
                <div class="popup-container">
                    <button class="mfp-close">&times;</button>
                    <img data-src="${ar.avatar_url}" alt="${ar.author}" class="popup-image lazy__load" />
                    <div class="popup-content">
                        <h3>${ar.author}</h3>
                        <p>${ar.review}</p>
                    </div>
                </div>
            </div>
        </li>`
    )
    .join('');
}

// Функція для створення розмітки відгуків
function createMarkupReviews(callback, array) {
  reviewsContainer.insertAdjacentHTML('beforeend', callback(array));
}
