'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (const theBtn of btnsOpenModal) {
  theBtn.addEventListener('click', showModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

const closingModalWithKeyPress = function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
};
document.addEventListener('keydown', closingModalWithKeyPress);
