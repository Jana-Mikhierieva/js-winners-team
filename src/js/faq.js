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
    beforeOpen: currElement => {
      const answerPanel = currElement.querySelector('.faq-box-answer');
      answerPanel.style.display = 'block';
    },
    beforeClose: currElement => {
      const answerPanel = currElement.querySelector('.faq-box-answer');
      answerPanel.style.display = 'none';
    },
  });
});

const sectors = document.querySelectorAll('.faq-item');

sectors.forEach(sector => {
  sector.addEventListener('click', function () {
    const arrow = this.querySelector('.faq-arrow');
    arrow.classList.toggle('rotate');
  });
});
