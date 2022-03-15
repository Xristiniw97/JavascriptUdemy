'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Modal closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// the function takes the event 
document.addEventListener('keydown', function (e) {
    console.log(e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});

// const closeModal = function (arg) {
//   arg.addEventListener('click', function () {
//     console.log('Modal closed');
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
// };

// closeModal(btnCloseModal);

// closeModal(overlay);
