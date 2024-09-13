import { postReview } from './api';
import iziToast from 'izitoast';
import { openModalWindow } from './modal-window.js';

const workTogetherFormEl = document.querySelector('.js-work-form');
const validationMessage = document.querySelector('.email-validation-message');

const emailInputEl = workTogetherFormEl.elements.email;
const commentInputEl = workTogetherFormEl.elements.comment;

let workTogetherForm = {
  email: '',
  comment: '',
};

const isFormFieldsEmpty = () => {
  const workTogetherFormEmail = emailInputEl.value.trim();
  const workTogetherFormComment = commentInputEl.value.trim();

  let isEmpty = false;

  if (workTogetherFormEmail === '') {
    emailInputEl.style.borderColor = '#ed3b44';
    isEmpty = true;
  }

  if (workTogetherFormComment === '') {
    commentInputEl.style.borderColor = '#ed3b44';
    isEmpty = true;
  }

  if (isEmpty) {
    iziToast.error({
      message: 'Please fill in all fields',
      position: 'bottomRight',
    });
  }

  return isEmpty;
};

const updateInputStyle = inputElement => {
  if (inputElement.value.trim() !== '') {
    inputElement.classList.add('filled');
  } else {
    inputElement.classList.remove('filled');
  }
};

const validateEmail = () => {
  const emailPattern = '^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$';
  if (emailInputEl.value.match(emailPattern)) {
    return true;
  } else {
    validationMessage.textContent = 'Invalid email, try again';
    validationMessage.style.color = '#e74a3b';
    emailInputEl.style.borderColor = '#e74a3b';
    return false;
  }
};

emailInputEl.addEventListener('input', () => {
  updateInputStyle(emailInputEl);
  validationMessage.textContent = '';
  emailInputEl.style.borderColor = '';
});
commentInputEl.addEventListener('input', () => {
  updateInputStyle(commentInputEl);
  commentInputEl.style.borderColor = '';
});

updateInputStyle(emailInputEl);
updateInputStyle(commentInputEl);

const onSubmitForm = async event => {
  event.preventDefault();

  const workTogetherFormEmail = workTogetherFormEl.elements.email.value.trim();
  const workTogetherFormComment =
    workTogetherFormEl.elements.comment.value.trim();

  if (isFormFieldsEmpty()) {
    return;
  }

  if (!validateEmail()) {
    return;
  }

  workTogetherForm.email = workTogetherFormEmail;
  workTogetherForm.comment = workTogetherFormComment;

  try {
    const postForm = await postReview(workTogetherForm);

    if (postForm) {
      updateInputStyle(emailInputEl);
      updateInputStyle(commentInputEl);
      validationMessage.textContent = 'Success!';
      validationMessage.style.color = '#3cbc81';
      emailInputEl.style.borderColor = '#3cbc81';

      setTimeout(() => {
        validationMessage.textContent = '';
        emailInputEl.style.borderColor = '';
        workTogetherFormEl.reset();
        openModalWindow();
      }, 1000);
    }
  } catch (error) {
    iziToast.error({
      message: 'Oops... Something went wrong!',
      position: 'bottomRight',
    });
    console.log(error);
  }
};

workTogetherFormEl.addEventListener('submit', onSubmitForm);
