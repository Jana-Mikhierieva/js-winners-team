export function disabledNavigationButtons(swiper, refsOption, classOptions) {
    const { prevButton, nextButton, prevIcon, nextIcon } = refsOption;
    const { disabledBtnClass, disabledIconClass, disabledAttribute } = classOptions;

    const isBeginning = swiper.isBeginning;
    const isEnd = swiper.isEnd;

    const toggleClass = (element, condition, className) => {
        condition ? element.classList.add(className) : element.classList.remove(className);
    };

    const toggleAttribute = (element, condition, attrName) => {
        condition ? element.setAttribute(attrName, 'true') : element.removeAttribute(attrName);
    };

    toggleClass(prevButton, isBeginning, disabledBtnClass);
    toggleClass(prevIcon, isBeginning, disabledIconClass);
    toggleAttribute(prevButton, isBeginning, disabledAttribute);

    toggleClass(nextButton, isEnd, disabledBtnClass);
    toggleClass(nextIcon, isEnd, disabledIconClass);
    toggleAttribute(nextButton, isEnd, disabledAttribute);
}
