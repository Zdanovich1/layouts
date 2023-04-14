/*-------------------------Меню-------------------------------*/
const iconMenu = document.querySelector('.header__icon');
const navigationList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');
const headerBack = document.getElementById('header__back');
const logo = document.querySelectorAll('.logo__item');

console.log(logo)

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('_active');
      document.body.classList.toggle('_lock');
      navigationList.classList.toggle('_active');
      headerBack.classList.toggle('_active');
      logo.forEach(logo => {
         logo.classList.toggle('_active')
      })
   });
}

if (menuLinks) {
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", function (e) {
         iconMenu.classList.remove('_active');
         document.body.classList.remove('_lock');
         navigationList.classList.remove('_active');
         headerBack.classList.remove('_active');
         logo.forEach(logo => {
            logo.classList.remove('_active')
         })
      })
   })
}

if (headerBack) {
   headerBack.addEventListener("click", function (e) {
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
      navigationList.classList.remove('_active');
      headerBack.classList.remove('_active');
      logo.forEach(logo => {
         logo.classList.remove('_active')
      })
   })
}




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


/*-------------------------------------------------------POPUP---------------------------------------------- */
/*-------------------------------------------------------POPUP---------------------------------------------- */
/*-------------------------------------------------------POPUP---------------------------------------------- */

let = popupLinks = document.querySelectorAll('.slider__item')
//let popupLinks = active.getElementsByTagName('*');
const body = document.querySelector('body');

let unlock = true;

//console.log(popupLinks)

if (popupLinks.length > 0) {
   for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      //console.log(popupLink.innerText[0])
      popupLink.addEventListener("click", function (e) {

         //console.log('popupLink')
         const currentPopup = document.getElementById('popup')
         popupOpen(currentPopup);

         for (let j = 0; j < pets.length; j++) {
            //console.log(pets[j].name[0])
            if (popupLink.innerText[0] == pets[j].name[0]) {

               document.querySelector('.popup__title').innerText = pets[j].name;
               document.querySelector('.breed').innerText = pets[j].breed;
               document.querySelector('.popup__description').innerText = pets[j].description;
               document.querySelector('.age').innerText = pets[j].age;
               document.querySelector('.inoculations').innerText = pets[j].inoculations;
               document.querySelector('.diseases').innerText = pets[j].diseases;
               document.querySelector('.parasites').innerText = pets[j].parasites;
               document.querySelector('.popup-img').src = pets[j].img;

            }
         }

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
      } else {
         //bodyLock();
      }
   }
   currentPopup.classList.add('open');
   document.body.style.overflow = "hidden";

   currentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup__content')) {
         popupClose(e.target.closest('.popup'));
      }
   })

   //let name = 





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