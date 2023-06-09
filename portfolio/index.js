/*--------------Перевод страницы на два языка-------------*/

const i18Obj = {
   'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standard': 'Standard',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'premium': 'Premium',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'gold': 'Gold',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'github': 'github'
   },
   'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standard': 'Стандарт',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'premium': 'Премиум',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'gold': 'Золотой',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'github': 'гитхаб'
   }
}

const russianLang = document.getElementById('russian');
const englishLang = document.getElementById('english');

let lang = 'en';
let theme = 'dark';

function getTranslate(lang) {
   const elements = document.querySelectorAll('[data-i18]');
   elements.forEach(element => element.textContent = i18Obj
   [lang][element.dataset.i18])
}

russianLang.addEventListener('click', function (e) {
   lang = 'ru';
   getTranslate('ru');
   russianLang.classList.toggle('lang-active');
   englishLang.classList.remove('lang-active');
})

englishLang.addEventListener('click', function (e) {
   lang = 'en';
   getTranslate('en');
   englishLang.classList.toggle('lang-active');
   russianLang.classList.remove('lang-active');
})

/*-------------------------Меню-------------------------------*/
const iconMenu = document.querySelector('.header__icon');
const navigationList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');
const headerBack = document.getElementById('header__back');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('_active');
      document.body.classList.toggle('_lock');
      navigationList.classList.toggle('_active');
      headerBack.classList.toggle('_active');
   });
}

if (menuLinks) {
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", function (e) {
         iconMenu.classList.remove('_active');
         document.body.classList.remove('_lock');
         navigationList.classList.remove('_active');
         headerBack.classList.remove('_active');
      })
   })
}

/*-----------------Светлая тема-------------*/

const lightWrapper = document.querySelector('.wrapper');
const lightSwitcher = document.querySelector('.header__switch');
const lightSkills = document.querySelector('.skills__container');
const lightPortfolio = document.querySelector('.portfolio__container');
const lightVideo = document.querySelector('.video__container');
const lightPrice = document.querySelector('.price__container');

const lightTitles = document.querySelectorAll('.title')
const lightButtons = document.querySelectorAll('.portfolio__button')

if (lightSwitcher) {
   lightSwitcher.addEventListener("click", function (e) {
      lightWrapper.classList.toggle('light');

      lightSkills.classList.toggle('light-theme');
      lightPortfolio.classList.toggle('light-theme');
      lightVideo.classList.toggle('light-theme');
      lightPrice.classList.toggle('light-theme');

      lightSwitcher.classList.toggle('switch-light');

      lightTitles.forEach(x => x.classList.toggle('light-title'));
      lightButtons.forEach(x => x.classList.toggle('light__button'));
      theme = 'light';
   })
}

/*--------------------Смена изображений-----------------------*/

const portfolioBtn = document.querySelectorAll('.portfolio__button')
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioButtons = document.querySelector('.portfolio__buttons')

function changeImage(event) {

   if (event.target.classList.contains('portfolio__button')) {
      portfolioImages.forEach((img, index) => {
         img.src = `assets/img/${event.target.dataset.season}/${index + 1}.jpg`;
      });
   }

   portfolioBtn.forEach(function (item) {
      item.classList.remove('button-active');
   })
   event.target.classList.toggle('button-active');
}
portfolioButtons.addEventListener('click', changeImage)

/*----------------------Local Storage-------------------------*/

function setLocalStorage() {
   localStorage.setItem('lang', lang);
   localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
   if (localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
   }

   if (localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme');
   }
}
window.addEventListener('load', getLocalStorage)