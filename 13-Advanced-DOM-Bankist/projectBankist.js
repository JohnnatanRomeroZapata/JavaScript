'use strict';

///// VARIABLES /////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///// Menu Fade Animation /////
const nav = document.querySelector('.nav');

///// Smooth Scrolling /////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///// Sticky Navigation /////
const body = document.querySelector('body');
const navHeight = nav.getBoundingClientRect().height;

///// Reveal Section /////
const allSections = document.querySelectorAll('.section');

///// Tabbed components /////
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///// Sliders /////
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

//////////////////////////////////////////////////////////////////////////////////////

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

/////***** Menu Fade Animation *****/////

/*
EVENT PROPAGATION
1. Add event listener to common parent element
2. Determine what element originated the event
*/
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5)); //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

nav.addEventListener('mouseout', handleHover.bind(1)); //The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

/////***** Page Navigation *****/////

/*
EVENT PROPAGATION
1. Add event listener to common parent element
2. Determine what element originated the event
*/
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////***** Smooth Scrolling *****/////
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////***** Sticky Navigation *****/////

//The callback function will be called each time the target element is intersecting the root element at the threshold we defined
const stickyNav = function (entries) {
  const [entry] = entries; // This is equal to write -> const entry = entries[0];

  if (entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

//The Intersection Observer API allows you to configure a callback that is called when either of these circumstances occur:
const navOberserver = new IntersectionObserver(stickyNav, {
  root: null, //The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.
  threshold: 0, //Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
  //rootMargin: `${navHeight}px`,
});

navOberserver.observe(body); //body -> target

/////***** Reveal Section *****/////
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target); //The IntersectionObserver method unobserve() instructs the IntersectionObserver to stop observing the specified target element.
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0, //Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
  //rootMargin: `100px`,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section); //Target
  section.classList.add('section--hidden');
});

/////***** Lazy Loading Images *****/////
const imgTargets = document.querySelectorAll('img[data-src');

const loadingImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

/////***** Tabbed components *****/////
tabsContainer.addEventListener('click', function (e) {
  /*The closest() method traverses the Element and its parents (heading toward the document root) until it finds a node that matches 
  the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.*/
  const tabClicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!tabClicked) return;

  //Active Tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabClicked.classList.add('operations__tab--active');

  //Activate content area
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );

  document
    .querySelector(`.operations__content--${tabClicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////***** Sliders *****/////
let currentSlide = 0;
const maxSlide = slides.length;

//***Got to Slide Functionality
const goToSlide = function (theSlide) {
  slides.forEach(
    (slide, position) =>
      (slide.style.transform = `translateX(${100 * (position - theSlide)}%)`) //The translateX() CSS function repositions an element horizontally on the 2D plane
  );
};

//***Creating dots container for Slides
const createDots = function () {
  slides.forEach(function (_, index) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${index}"></button>`
    );
  });
};

//***Activate Dot Functionality
const activateDot = function (currSlide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${currSlide}"]`)
    .classList.add('dots__dot--active');
};

//Initialization
const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};

///** Moving Sliders with Arrows **///

//Prev Slides
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
  activateDot(currentSlide);
};
btnLeft.addEventListener('click', prevSlide);

//Next Slides
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  activateDot(currentSlide);
};
btnRight.addEventListener('click', nextSlide);

///** Moving Sliders with keyboard **///
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

///** Moving Sliders with Dots **///

/*
EVENT PROPAGATION
1. Add event listener to common parent element
2. Determine what element originated the event
*/
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
