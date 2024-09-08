const menuBtn = document.querySelector('.desktop-menu-btn');
const menuList = document.querySelector('.navigation-menu');
menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('is-open');
});
