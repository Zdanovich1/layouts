/*-----------------------------Burger menu------------------------------ */
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

if (headerBack) {
   headerBack.addEventListener("click", function (e) {
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
      navigationList.classList.remove('_active');
      headerBack.classList.remove('_active');
   })
}

/*--------------------------------------------Slider--------------------------------------- */

const pets = [
   {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
   },
   {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
   },
   {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
   }
]

const sliderElements = document.querySelectorAll('.slider__item')
const arrowLeft = document.querySelector('.arrows__left')
const arrowRight = document.querySelector('.arrows__right')
const carusel = document.querySelector('.slider__inner-wrapper')
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const moveLeft = () => {
   carusel.classList.add("transition-left");
   arrowLeft.removeEventListener("click", moveLeft);
   arrowRight.removeEventListener("click", moveRight);
};

const moveRight = () => {
   carusel.classList.add("transition-right");
   arrowLeft.removeEventListener("click", moveLeft);
   arrowRight.removeEventListener("click", moveRight);
};

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);

carusel.addEventListener("animationend", (animationEvent) => {

   let changedItem;
   if (animationEvent.animationName === "move-left") {
      carusel.classList.remove("transition-left");
      changedItem = ITEM_LEFT;

      document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;

      const itemTitle = document.querySelectorAll('.item__ttl')
      const itemImage = document.querySelectorAll('.item__img')

      let arr = [];
      for (let i = 0; i < 100; i++) {
         let random = getRandom(0, 7);

         if (!arr.includes(random) && pets[random].name !== itemTitle[3].innerHTML && pets[random].name !== itemTitle[4].innerHTML && pets[random].name !== itemTitle[5].innerHTML) {
            arr.push(random)
         }
         if (arr.length == 3) break
      }
      //console.log(arr)

      for (let i = 0; i < arr.length; i++) {

         itemImage[i].src = pets[arr[i]].img;
         itemTitle[i].innerHTML = pets[arr[i]].name;

      }

      for (let i = 6; i < itemImage.length; i++) {

         itemImage[i].src = pets[arr[i - 6]].img;
         itemTitle[i].innerHTML = pets[arr[i - 6]].name;

      }

   } else {
      carusel.classList.remove("transition-right");
      changedItem = ITEM_RIGHT;
      document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;

      const itemTitle = document.querySelectorAll('.item__ttl')
      const itemImage = document.querySelectorAll('.item__img')
      //console.log(itemImage.length)

      let arr = [];
      for (let i = 0; i < 100; i++) {
         let random = getRandom(0, 7);

         if (!arr.includes(random) && pets[random].name !== itemTitle[3].innerHTML && pets[random].name !== itemTitle[4].innerHTML && pets[random].name !== itemTitle[5].innerHTML) {
            arr.push(random)
         }
         if (arr.length == 3) break
      }
      //console.log(arr)

      for (let i = 0; i < arr.length; i++) {

         itemImage[i].src = pets[arr[i]].img;
         itemTitle[i].innerHTML = pets[arr[i]].name;

      }

      for (let i = 6; i < itemImage.length; i++) {

         itemImage[i].src = pets[arr[i - 6]].img;
         itemTitle[i].innerHTML = pets[arr[i - 6]].name;

      }

   }

   arrowLeft.addEventListener("click", moveLeft);
   arrowRight.addEventListener("click", moveRight);
})

// Функция, отвечающая за рандом при загрузке страницы

function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
let a = getRandom(0, 8)

/*-------------------------------------------------------POPUP---------------------------------------------- */
/*-------------------------------------------------------POPUP---------------------------------------------- */
/*-------------------------------------------------------POPUP---------------------------------------------- */

let = active = document.querySelector('.slider__inner-wrapper')
let popupLinks = active.getElementsByTagName('div');
const body = document.querySelector('body');

let unlock = true;

//console.log(popupLinks)

if (popupLinks.length > 0) {
   for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      //console.log(popupLinks[i])
      popupLink.addEventListener("click", function (e) {

         const currentPopup = document.getElementById('popup');
         //console.log(popupLink);
         popupOpen(currentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let i = 0; i < popupCloseIcon.length; i++) {
      const el = popupCloseIcon[i];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      })
   }
}

function popupOpen(currentPopup) {

   if (currentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      }
   }

   currentPopup.classList.add('open');
   document.body.style.overflow = "hidden";

   currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
         popupClose(e.target.closest('.popup'));
      }
   })

}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      document.body.style.overflow = "";

      popupActive.classList.remove('open');
      if (doUnlock) {
         //bodyUnLock();
      }
   }
}