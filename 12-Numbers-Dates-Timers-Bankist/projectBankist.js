'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-12-15T23:36:17.929Z',
    '2020-12-19T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

/////FUNCTIONS/////

//Formating Movements
const formatMovementDate = function (date) {
  //Date
  const calcDayPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDayPassed(new Date(), date);

  if (daysPassed === 0) {
    return 'Today';
  } else if (daysPassed === 1) {
    return 'Yesterday';
  } else if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    //const locale = navigator.language;
    const locale2 = 'fr-CA';

    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    return new Intl.DateTimeFormat(locale2, options).format(date);
  }
};

//Formating Currency
const formatCurrency = function (value, locale, currency) {
  const options = { style: 'currency', currency: currency };
  return new Intl.NumberFormat(locale, options).format(value);
};

/////DISPLAY MOVEMENTS/////
const displayMovements = function (theAcc, sort = false) {
  containerMovements.innerHTML = '';

  /*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to 
  end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/
  const movs = sort
    ? theAcc.movements.slice().sort((a, b) => a - b)
    : theAcc.movements;

  //The forEach(callback[currentValue, index, array]) method executes a provided function once for each array element.
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(theAcc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const formattedMov = formatCurrency(mov, navigator.language, 'CAD');

    //HTML for each movement
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>
      `;

    //element.insertAdjacentHTML(position, text);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/////CALCULATE BALANCE/////
const calcDisplayBalance = function (theAcc) {
  /*The reduce(callback[accumulator, currentValue, index, array] , initialValue) method executes a reducer function (that you provide) 
  on each element of the array, resulting in single output value.*/
  theAcc.balance = theAcc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedBalance = formatCurrency(
    theAcc.balance,
    navigator.language,
    'CAD'
  );

  labelBalance.textContent = `${formattedBalance}`;
};

/////DISPLAY SUMMARY(Incomes , Outcomes , Interests)/////
const calcDisplaySummary = function (theAcc) {
  const incomes = theAcc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const formattedIncomes = formatCurrency(incomes, navigator.language, 'CAD');
  labelSumIn.textContent = `${formattedIncomes}`;

  const outcomes = theAcc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  const formattedOutcomes = formatCurrency(
    Math.abs(outcomes),
    navigator.language,
    'CAD'
  );
  labelSumOut.textContent = `${formattedOutcomes}`;

  const interest = theAcc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * theAcc.interestRate) / 100)
    .filter(inte => inte >= 1)
    .reduce((acc, inte) => acc + inte);
  const formattedInterest = formatCurrency(interest, navigator.language, 'CAD');
  labelSumInterest.textContent = `${formattedInterest}`;
};

/////CREATE USERNAME/////
const createUsernames = function (arrayOfAccounts) {
  arrayOfAccounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      /*The map(callback[currentValue, index, array]) method creates a new array populated with the results of calling a provided function 
      on every element in the calling array.*/
      .map(currentName => currentName[0])
      .join('');
  });
};
createUsernames(accounts);

/////LOGIN/////
let currentAccount, timer;

//Update UI
const updateUI = function (theAcc) {
  //Display Movements
  displayMovements(theAcc);

  //Display Balance
  calcDisplayBalance(theAcc);

  //Display Summary
  calcDisplaySummary(theAcc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearTimeout(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Welcome';
    }

    //Decrese 1s
    time--;
  };

  // Set time to
  let time = 120;

  //Call tick every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  /*The find(callback[element, index, array] , thisArg) method returns the value of the first element in the provided array that satisfies 
  the provided testing function. If no values satisfies the testing function, undefined is returned.*/
  currentAccount = accounts.find(
    theAcc => theAcc.username === inputLoginUsername.value
  );

  /*
  The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to 
  expressly validate that each reference in the chain is valid. The ?. operator functions similarly to the . 
  chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a 
  return value of undefined. When used with function calls, it returns undefined if the given function does not exist.
  */
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Create current date and time
    const locale = navigator.locale;
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Checking if there is already a timer running
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    //Update UI
    updateUI(currentAccount);
  }
});

/////TRANFER MONEY/////
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    theAcc => theAcc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Add tranfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    //Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

/////TAKING A LOAN/////
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountToLoan = Math.floor(inputLoanAmount.value);

  if (
    amountToLoan > 0 &&
    currentAccount.movements.some(mov => mov >= amountToLoan * 0.1)
  ) {
    setTimeout(function () {
      //Add load
      currentAccount.movements.push(amountToLoan);

      //Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      //Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 3000);
  }

  inputLoanAmount.value = '';
});

/////DELETING ACCOUNT/////
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    /*The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
    Otherwise, it returns -1, indicating that no element passed the test.*/
    const index = accounts.findIndex(
      theAcc => theAcc.username === currentAccount.username
    );

    //Delete UI

    /*splice(start , deleteCount(An integer indicating the number of elements in the array to remove from start.)) method changes the 
    contents of an array by removing or replacing existing elements and/or adding new elements in place.*/
    accounts.splice(index, 1);

    //HideUI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = 'Welcome';
});

/////SORTING MOVEMENTS/////
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////OTHER FUNCTION/////
labelBalance.addEventListener('click', function () {
  console.log(document.querySelectorAll('.movements__value'));
  //The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    currentElement => Number(currentElement.textContent.replace('💲', ''))
  );
  console.log(movementsUI);

  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
  });
});
