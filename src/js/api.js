import axios from 'axios';
import iziToast from "izitoast";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/reviews';

export async function getReview() {
	const errorText = document.querySelector('.js-text-error');
	const btnContainer = document.querySelector('.js-reviews-btn');
    try {
	    const response = await axios.get();
	    
	    if (response.data.length === 0) {
		  btnContainer.classList.add('reviews__error');
		  errorText.classList.remove('reviews__error');
		  iziToast.error({
			message: "Sorry, no Reviews found.",
			position: 'bottomRight',
		  });
		  return;
	    }
	    return response.data;
    } catch {
	    btnContainer.classList.add('reviews__error');
	    errorText.classList.remove('reviews__error');
          iziToast.error({
			message: "Sorry, no Reviews found.",
			position: 'bottomRight',
		  });
    }
}



