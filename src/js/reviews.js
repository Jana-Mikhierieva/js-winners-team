import { getReview } from "./api";
import Swiper from 'swiper/bundle'; 

const reviewsContainer = document.querySelector('.js-reviews');

window.onload = async () => {
    const reviews = await getReview();
    
    // об'єкт який містить посилання на кнопки та іконки на яких змінюємо класи
    // на місце цих класів '.reviews__btn--prev','.js-review-icon-prev' і т.д повставляйте свої
    const refsOption = {
        prevButton: document.querySelector('.reviews__btn--prev'),
        nextButton: document.querySelector('.reviews__btn--next'),
        prevIcon: document.querySelector('.js-review-icon-prev'),
        nextIcon: document.querySelector('.js-review-icon-next'),
    };
    
    // об'єкт який містить атрибут та класи які треба вішати або знімати
    // на місце цих класів 'reviews__btn--disabled','reviews__icon--disabled' і т.д повставляйте свої
    const classOptions = {
        disabledBtnClass: 'reviews__btn--disabled',
        disabledIconClass: 'reviews__icon--disabled',
        disabledAttribute: 'disabled',
    };

    renderMarkupReviews(createMarkupReviews, reviews);

    const swiper = new Swiper('.swiper', {
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

        // додайте цей код у налантування свого свайперу для відпрацьовування функції
        on: {
            init: function () {
                disabledNavigationButtons(this, refsOption, classOptions);
            },
            slideChange: function () {
                disabledNavigationButtons(this, refsOption, classOptions);
            },
        },
    });
};


function createMarkupReviews(array) {
     return array.map(ar => `
      <li class="reviews__item swiper-slide">
        <img 
          class="reviews__image" 
          src="${ar.avatar_url}" 
          alt="commentator's photo" 
        />
        <h4 class="reviews__title">${ar.author}</h4>
        <p class="reviews__text">${ar.review}</p>
      </li>`).join('');
}

function renderMarkupReviews(callback, array) {
    reviewsContainer.insertAdjacentHTML('beforeend', callback(array));
}

// ФУНКЦІЯ ДЛЯ РОБОТИ З КНОПКАМИ ЯКІ ПЕРЕМИКАЮТЬ СВАЙПЕР
// ІМПОРТУЙТЕ ЇЇ ТА ВИКЛИЧІТЬ ТАМ ДЕ ІНІЦІАЛІЗУЄТЕ СВАЙПЕР
// ПЕРЕДАЙТЕ ЇЙ ТРИ АРГУМЕНТИ:
// el-це сам свайпер
// refsOption-об'єкт який містить посилання на кнопки та іконки на яких змінюємо класи
// classOptions-об'єкт який містить атрибут та класи які треба вішати
export function disabledNavigationButtons(el, refsOption, classOptions) {
    const { prevButton, nextButton, prevIcon, nextIcon } = refsOption;
    const { disabledBtnClass, disabledIconClass, disabledAttribute } = classOptions;

    const toggleClass = (element, condition, className) => {
        condition ? element.classList.add(className) : element.classList.remove(className);
    };

    const toggleAttribute = (element, condition, attrName) => {
        condition ? element.setAttribute(attrName, 'true') : element.removeAttribute(attrName);
    };

    toggleClass(prevButton, el.isBeginning, disabledBtnClass);
    toggleClass(prevIcon, el.isBeginning, disabledIconClass);
    toggleAttribute(prevButton, el.isBeginning, disabledAttribute);

    toggleClass(nextButton, el.isEnd, disabledBtnClass);
    toggleClass(nextIcon, el.isEnd, disabledIconClass);
    toggleAttribute(nextButton, el.isEnd, disabledAttribute);
}
