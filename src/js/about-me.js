import Accordion from 'accordion-js';



const accordion = new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
        let content = currentElement.querySelector('.ac-panel');

        content.style.maxHeight = content.scrollHeight + 'px';

    }
});

accordion.open(0);

document.querySelectorAll(`.ac-trigger`).forEach(el => {

    el.addEventListener('click', () => {
        let content = el.closest('.ac').querySelector('.ac-panel');

        
        content.style.maxHeight = content.scrollHeight + 'px';
    })
});
