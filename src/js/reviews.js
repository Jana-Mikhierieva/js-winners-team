import { getReview } from "./api";
import Swiper from 'swiper/bundle';
import LazyLoad from "vanilla-lazyload";
import $ from 'jquery';
import 'magnific-popup';

const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});

const reviewsContainer = document.querySelector('.js-reviews');

const refsOption = {
    prevButton: document.querySelector('.reviews__btn--prev'),
    nextButton: document.querySelector('.reviews__btn--next'),
    prevIcon: document.querySelector('.js-review-icon-prev'),
    nextIcon: document.querySelector('.js-review-icon-next'),
};

const classOptions = {
    disabledBtnClass: 'reviews__btn--disabled',
    disabledIconClass: 'reviews__icon--disabled',
    disabledAttribute: 'disabled',
};

function initializeSwiper() {
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
        },
    });

    // Ініціалізація Magnific Popup
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });
}

window.onload = async () => {
    const reviews = await getReview();
    renderMarkupReviews(createMarkupReviews, reviews);
    initializeSwiper();
    lazyLoadInstance.update();
};

function createMarkupReviews(array) {
    return array.map((ar, index) => `
        <li class="reviews__item swiper-slide">
            <a href="#review${index}" class="open-popup-link">
                <img 
                    class="lazy reviews__image"
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
                    <img src="${ar.avatar_url}" alt="${ar.author}" class="popup-image" />
                    <div class="popup-content">
                        <h2>${ar.author}</h2>
                        <p>${ar.review}</p>
                    </div>
                </div>
            </div>
        </li>`).join('');
}



function renderMarkupReviews(callback, array) {
    reviewsContainer.insertAdjacentHTML('beforeend', callback(array));
}

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
