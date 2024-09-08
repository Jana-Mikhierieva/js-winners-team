import Swiper from 'swiper/bundle';

const refsOption = {
  prevButton: document.querySelector('.left-button'),
  nextButton: document.querySelector('.right-button'),
  prevIcon: document.querySelector('.left-icon'),
  nextIcon: document.querySelector('.right-icon'),
};

const classOptions = {
  disabledBtnClass: 'button-disabled-projects',
  disabledIconClass: 'icon-disabled',
  disabledAttribute: 'disabled',
};

const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.right-button',
    prevEl: '.left-button',
  },

  on: {
    init: function () {
      disabledNavigationButtons(this, refsOption, classOptions);
    },
    slideChange: function () {
      disabledNavigationButtons(this, refsOption, classOptions);
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

function disabledNavigationButtons(el, refsOption, classOptions) {
  const { prevButton, nextButton, prevIcon, nextIcon } = refsOption;
  const { disabledBtnClass, disabledIconClass, disabledAttribute } =
    classOptions;

  const toggleClass = (element, condition, className) => {
    condition
      ? element.classList.add(className)
      : element.classList.remove(className);
  };

  const toggleAttribute = (element, condition, attrName) => {
    condition
      ? element.setAttribute(attrName, 'true')
      : element.removeAttribute(attrName);
  };

  toggleClass(prevButton, el.isBeginning, disabledBtnClass);
  toggleClass(prevIcon, el.isBeginning, disabledIconClass);
  toggleAttribute(prevButton, el.isBeginning, disabledAttribute);

  toggleClass(nextButton, el.isEnd, disabledBtnClass);
  toggleClass(nextIcon, el.isEnd, disabledIconClass);
  toggleAttribute(nextButton, el.isEnd, disabledAttribute);
}

refsOption.nextButton.disabled = false;
refsOption.nextButton.classList.remove('button-disabled-projects');
refsOption.nextIcon.classList.remove('icon-disabled');
