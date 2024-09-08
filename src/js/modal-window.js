const modal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-close-modal');
const openModal = document.querySelector('.js-open-modal');

function openModalWindow() {
    modal.classList.add('is-open');
    document.addEventListener('keydown', closeEscapeKey);
    modal.addEventListener('click', closeModalClick);
}

function closeModalWindow() {
    modal.classList.remove('is-open');
    document.removeEventListener('keydown', closeEscapeKey);
    modal.removeEventListener('click', closeModalClick);
}

function closeEscapeKey(event) {
    if (event.key === 'Escape') {
        closeModalWindow();
    }
}

function closeModalClick(event) {
    if (event.target === modal) {
        closeModalWindow();
    }
}

openModal.addEventListener('click', openModalWindow);
closeModal.addEventListener('click', closeModalWindow);
