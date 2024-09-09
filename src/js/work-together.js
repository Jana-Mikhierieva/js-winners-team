import { postReview } from './api';
import iziToast from 'izitoast';
import { openModalWindow } from './modal-window.js';

const workTogetherFormEl = document.querySelector('.js-work-form');
const validationMessage = document.querySelector('.email-validation-message');

const emailInputEl = workTogetherFormEl.elements.email;

let workTogetherForm = {
  email: '',
  comment: '',
};

const validateEmail = () => {
  const emailPattern = '^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$';
  if (emailInputEl.value.match(emailPattern)) {
    validationMessage.textContent = 'Succes!';
    validationMessage.style.color = '#3cbc81';
    emailInputEl.style.borderColor = '#3cbc81';
    return true;
  } else {
    validationMessage.textContent = 'Invalid email, try again';
    validationMessage.style.color = '#e74a3b';
    emailInputEl.style.borderColor = '#e74a3b';
    return false;
  }
};

emailInputEl.addEventListener('input', () => {
  validationMessage.textContent = '';
  emailInputEl.style.borderColor = '';
});

const onSubmitForm = async event => {
  event.preventDefault();

  const workTogetherFormEmail = workTogetherFormEl.elements.email.value.trim();
  const workTogetherFormComment =
    workTogetherFormEl.elements.comment.value.trim();

  if (workTogetherFormEmail === '' || workTogetherFormComment === '') {
    iziToast.error({
      message: 'Please fill in all fields',
      position: 'bottomRight',
    });
    return;
  }

  if (!validateEmail()) {
    return;
  }

  workTogetherForm.email = workTogetherFormEmail;
  workTogetherForm.comment = workTogetherFormComment;

  try {
    const postForm = await postReview(workTogetherForm);

    setTimeout(() => {
      validationMessage.textContent = '';
      emailInputEl.style.borderColor = '';
      workTogetherFormEl.reset();
    }, 1000);

    openModalWindow();
  } catch (error) {
    console.log(error);
  }
};

workTogetherFormEl.addEventListener('submit', onSubmitForm);
