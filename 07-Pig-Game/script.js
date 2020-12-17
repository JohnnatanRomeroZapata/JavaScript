'use strict';

//Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const currentScorePlayer0Element = document.getElementById('current--0');
const currentScorePlayer1Element = document.getElementById('current--1');

const totalScorePlayer0Element = document.querySelector('#score--0');
const totalScorePlayer1Element = document.getElementById('score--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing, activePlayer, currentScore, totalScores;

//Starting conditions
const init = function () {
  totalScores = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  totalScorePlayer0Element.textContent = 0;
  totalScorePlayer1Element.textContent = 0;

  currentScorePlayer0Element.textContent = 0;
  currentScorePlayer1Element.textContent = 0;

  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');

  diceElement.classList.add('hidden');
};

init();

///////
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${randomDice}.png`;

    //3. Check for rolled 1
    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //Switch next player
      switchPlayer();
    }
  }
});

//Holding values
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    //2. Check if player's score is >= 100. Finish game
    if (totalScores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch to next player
      switchPlayer();
    }
  }
});

//Restarting the game
btnNew.addEventListener('click', init);
