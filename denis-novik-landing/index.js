const headerIcon = document.querySelector('.header__icon');
const menuList = document.querySelector('.header__menu');
const navLinks = document.querySelectorAll('.menu__link');
const langBtns = document.querySelector('.home__lang-btns');

headerIcon.addEventListener('click', openMenu)
navLinks.forEach((item) => item.addEventListener('click', closeMenu));

/*helpers*/

function openMenu() {
   menuList.classList.toggle('_active');
   document.body.classList.toggle('_lock');
   headerIcon.classList.toggle('_open');
   langBtns.classList.toggle('_menu-mod')
}

function closeMenu() {
   menuList.classList.remove('_active');
   document.body.classList.remove('_lock');
   headerIcon.classList.remove('_open');
}