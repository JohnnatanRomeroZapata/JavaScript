'use strict';

/*
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

//Place where we type the number
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

const displayMessage = function (msn) {
  document.querySelector('.message').textContent = msn;
};

const guessingNumber = function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  //Not input number
  if (!guessedNumber) {
    displayMessage('⛔ You did not type a number ⛔');

    //Player wins
  } else if (guessedNumber === hiddenNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Congrats 🎉');
    document.querySelector('.number').textContent = String(hiddenNumber);

    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = String(highestScore);
    }

    //Number too high or too low
  } else if (guessedNumber !== hiddenNumber) {
    if (score > 1) {
      guessedNumber > hiddenNumber
        ? displayMessage('📈 Too high 📈')
        : displayMessage('📉 Too low 📉');
      score--;
      document.querySelector('.score').textContent = String(score);
    } else {
      displayMessage('💥 End of the game 💥');
    }
  }
};

document.querySelector('.check').addEventListener('click', guessingNumber);

//Reseting the Game
const refreshingPage = function () {
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = '20';
};

document.querySelector('.again').addEventListener('click', refreshingPage);
