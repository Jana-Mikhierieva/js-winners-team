import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReview() {
  const errorText = document.querySelector('.js-text-error');
  const btnContainer = document.querySelector('.js-reviews-btn');
  try {
    const response = await axios.get('/reviews');

    if (response.data.length === 0) {
      btnContainer.classList.add('reviews__error');
      errorText.classList.remove('reviews__error');
      iziToast.error({
        message: 'Oops...Something went wrong!',
        position: 'bottomRight',
      });
      return;
    }
    return response.data;
  } catch {
    btnContainer.classList.add('reviews__error');
    errorText.classList.remove('reviews__error');
    iziToast.error({
      message: 'Oops...Something went wrong!',
      position: 'bottomRight',
    });
  }
}

export async function postReview(workTogetherData) {
  try {
    const response = await axios.post('/requests', workTogetherData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      message: 'Oops...Something went wrong!',
      position: 'bottomRight',
    });
  }
}
