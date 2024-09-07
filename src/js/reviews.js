import { getReview } from "./api"; 


const reviewsContainer = document.querySelector('.js-reviews');
const reviews = await getReview();

function createMarkupReviews (array) {
	return array.map(ar => `
	  <li class="reviews__item">
		<img 
		  class="reviews__image" 
		  src="${ar.avatar_url}" 
		  alt="commentator's photo" 
		/>
		<h4 class="reviews__title">"${ar.author}"</h4>
		<p> class="reviews__text">"${ar.review}"</p>
	  </li>`).join('');
}

function renderMarkupReviews(callback,array) {
	reviewsContainer.insertAdjacentHTML('beforeend', callback(array));
}

renderMarkupReviews(createMarkupReviews, reviews);


