import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordions = Array.from(
    document.querySelectorAll('.accordion-container')
  );
  const accordion = new Accordion(accordions, {
    duration: 400,
    showFirstItem: false,
    elementClass: 'faq-item',
    triggerClass: 'faq-btn',
    panelClass: 'faq-box-answer',
    headerClass: 'faq-item-title',
  });
});

const sectors = document.querySelectorAll('.faq-item');

sectors.forEach(sector => {
  sector.addEventListener('click', function () {
    const arrow = this.querySelector('.faq-arrow');
    arrow.classList.toggle('rotate');
  });
});

// faqButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const parent = this.closest('.faq-box-question');
//     parent.classList.toggle('active');
//   });
// });
