import { getReview } from "./api";
import Swiper from 'swiper/bundle'; 

const reviewsContainer = document.querySelector('.js-reviews');

window.onload = async () => {
    const reviews = await getReview();

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
        }
    });

function disabledNavigationButtons() {
    const prevButton = document.querySelector('.reviews__btn--prev');
    const nextButton = document.querySelector('.reviews__btn--next');
    const prevIcon = document.querySelector('.js-review-icon-prev');
    const nextIcon = document.querySelector('.js-review-icon-next');;

    if (swiper.isBeginning) {
        prevButton.classList.add('reviews__btn--disabled');
        prevIcon.classList.add('reviews__icon--disabled');
        prevButton.setAttribute('disabled', 'true');
    } else {
        prevButton.classList.remove('reviews__btn--disabled');
        prevIcon.classList.remove('reviews__icon--disabled');
        prevButton.removeAttribute('disabled');
    }

    if (swiper.isEnd) {
        nextButton.classList.add('reviews__btn--disabled');
        nextIcon.classList.add('reviews__icon--disabled');
        nextButton.setAttribute('disabled', 'true');
    } else {
        nextButton.classList.remove('reviews__btn--disabled');
        nextIcon.classList.remove('reviews__icon--disabled');
        nextButton.removeAttribute('disabled');
    }
}
    
    disabledNavigationButtons();
    swiper.on('slideChange', disabledNavigationButtons);
};