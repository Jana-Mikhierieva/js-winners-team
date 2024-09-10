const menuBtn = document.querySelector('.desktop-menu-btn');
const menuList = document.querySelector('.navigation-menu');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('is-open');
});
menuList.addEventListener('click', event => {
  if (event.target.nodeName !== 'A') {
    return;
  }
  menuList.classList.remove('is-open');
});
const mobileMenu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});
mobileMenu.addEventListener('click', event => {
  if (event.target.nodeName !== 'A') {
    return;
  }
  mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
});

const header = document.querySelector('.header');
window.onscroll = () => {
  if (scrollY > 32) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
};
