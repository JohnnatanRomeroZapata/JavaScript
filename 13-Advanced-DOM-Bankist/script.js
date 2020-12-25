'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///// SELECTING Elements /////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log('\n');

const header = document.querySelector('.header');
const allSections = document.querySelector('.section');
console.log(allSections);

console.log('\n');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log('\n');

console.log(document.getElementsByClassName('bnt'));

console.log('\n');

///// CREATING element /////
const message = document.createElement('div');

message.classList.add('cookie-message');

// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

console.log('\n');
///// INSERTING Element /////

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

console.log('\n');
///// DELETING Elements /////
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

console.log('\n');
///// STYLES /////
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.background);
console.log(getComputedStyle(message).height);
console.log(Number.parseFloat(getComputedStyle(message).height));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

console.log('\n');
///// ATTRIBUTES /////
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

console.log(logo.className);

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('comany', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

console.log('\n');
console.log('//********** Type of Events **********//');

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');
};

h1.addEventListener('mouseenter', alertH1);

console.log('\n');
console.log(
  '//********** Event Propagation: Bubbling and Capturing **********//'
);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //Stop Propagation
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

console.log('\n');
console.log('//********** DOM Traversing **********//');

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
h1.closest('.header').style.background = 'orange';

//Going Sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log('\n');
console.log('//********** Intersection Observer API **********//');

// //The callback function will be called each time the target element is intersecting the root element at the threshold we defined
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, //element that the target is intersecting
//   threshold: [0, 0.1, 0.2], //% of intersection at which the callback will be call
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1); //header -> target

// const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;

//The callback function will be called each time the target element is intersecting the root element at the threshold we defined
const stickyNav = function (entries) {
  const [entry] = entries; // This is equal to write -> const entry = entries[0];
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerOberserver = new IntersectionObserver(stickyNav, {
  root: null, //element that the target is intersecting
  threshold: 0, //% of intersection at which the callback will be call
  rootMargin: `${navHeight}px`,
});

headerOberserver.observe(header); //header -> target
