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
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
	
	swiper.init();
	
    function disabledNavigationButtons() {
        const prevButton = document.querySelector('.js-swiper-prev');
        const nextButton = document.querySelector('.js-swiper-next');

        if (swiper.isBeginning) {
            prevButton.classList.add('reviews__disabled');
        } else {
            prevButton.classList.remove('reviews__disabled');
        }

        if (swiper.isEnd) {
            nextButton.classList.add('reviews__disabled');
        } else {
            nextButton.classList.remove('reviews__disabled');
        }
	}
	
    disabledNavigationButtons();

    swiper.on('slideChange', disabledNavigationButtons);
};



