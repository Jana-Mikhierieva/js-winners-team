import { getReview } from "./api";
import Swiper from 'swiper/bundle';
import LazyLoad from "vanilla-lazyload";
import $ from 'jquery';
import 'magnific-popup';

// Ініціалізація бібліотеки vanilla-lazyload
const  loadingDeferredInstance = new LazyLoad({
    elements_selector: ".lazy__load"
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

// Функція ініціалізаціі
function initializeSwiper() {

    // Ініціалізація свайпера
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
    // Ініціалізація магніфікПопап
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });
}

// Метод який відпрацює після того як будуть завантажені стилі,html і т.д
window.onload = async () => {

    // Виклик запиту на сервер
    const reviews = await getReview();
    // Виклик функції яка відмальовує розмітку з відповіддю з сервера 
    createMarkupReviews(renderMarkupReviews, reviews);
    // Виклик функції яка ініціалізує свайпер та магніфікПопап
    initializeSwiper();
    // Виклик методу бібліотеки vanilla-lazyload який оновлює її ініціалізацію після рендеру
    loadingDeferredInstance.update();
};


// Функція яка рендерить розмітку
function renderMarkupReviews(array) {
    return array.map((ar, index) => `
        <li class="reviews__item swiper-slide">
            <a href="#review${index}" class="open-popup-link">
                <img 
                    class="lazy__load reviews__image"
                    data-src="${ar.avatar_url}" 
                    alt="commentator's photo" 
                />
                <h4 class="reviews__title">${ar.author}</h4>
                <p class="reviews__text">${ar.review}</p>
            </a>
            <!-- Hidden popup content -->
            <div id="review${index}" class="mfp-hide">
                <div class="popup-container">
                    <button class="mfp-close">&times;</button> <!-- Хрестик для закриття -->
                    <img data-src="${ar.avatar_url}" alt="${ar.author}" class="popup-image lazy__load" />
                    <div class="popup-content">
                        <h2>${ar.author}</h2>
                        <p>${ar.review}</p>
                    </div>
                </div>
            </div>
        </li>`).join('');
}

// Функція яка відмальовує розмітку
function createMarkupReviews(callback, array) {
    reviewsContainer.insertAdjacentHTML('beforeend', callback(array));
}

// Функція яка змінює клас та атрибут на кнопках для свайпера
function disabledNavigationButtons(swiper, refsOption, classOptions) {
    const { prevButton, nextButton, prevIcon, nextIcon } = refsOption;
    const { disabledBtnClass, disabledIconClass, disabledAttribute } = classOptions;

    const isBeginning = swiper.isBeginning;
    const isEnd = swiper.isEnd;

    const toggleClass = (element, condition, className) => {
        condition ? element.classList.add(className) : element.classList.remove(className);
    };
    const toggleAttribute = (element, condition, attrName) => {
        condition ? element.setAttribute(attrName, 'true') : element.removeAttribute(attrName);
    };

    toggleClass(prevButton, isBeginning, disabledBtnClass);
    toggleClass(prevIcon, isBeginning, disabledIconClass);
    toggleAttribute(prevButton, isBeginning, disabledAttribute);

    toggleClass(nextButton, isEnd, disabledBtnClass);
    toggleClass(nextIcon, isEnd, disabledIconClass);
    toggleAttribute(nextButton, isEnd, disabledAttribute);
}