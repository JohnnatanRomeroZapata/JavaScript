'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//DISPLAY MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  /*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to 
  end (end not included) where start and end represent the index of items in that array. The original array will not be modified.*/
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  //The forEach(callback[currentValue, index, array]) method executes a provided function once for each array element.
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}💲</div>
        </div>
      `;

    //element.insertAdjacentHTML(position, text);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//CALCULATE BALANCE
const calcDisplayBalance = function (theAcc) {
  /*The reduce(callback[accumulator, currentValue, index, array] , initialValue) method executes a reducer function (that you provide) 
  on each element of the array, resulting in single output value.*/
  theAcc.balance = theAcc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${theAcc.balance}💲`;
};

//DISPLAY SUMMARY(Incomes , Outcomes , Interests)
const calcDisplaySummary = function (theAcc) {
  const incomes = theAcc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);

  labelSumIn.textContent = `${incomes}💲`;

  const outcomes = theAcc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);

  labelSumOut.textContent = `${Math.abs(outcomes)}💲`;

  const interest = theAcc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * theAcc.interestRate) / 100)
    .filter(inte => inte >= 1)
    .reduce((acc, inte) => acc + inte);
  labelSumInterest.textContent = `${interest}💲`;
};

//CREATE USERNAME
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

//LOGIN

//Update UI
const updateUI = function (theAcc) {
  //Display Movements
  displayMovements(theAcc.movements);

  //Display Balance
  calcDisplayBalance(theAcc);

  //Display Summary
  calcDisplaySummary(theAcc);
};

let currentAccount;

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

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

//TRANFER MONEY
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

    //Update UI
    updateUI(currentAccount);
  }
});

//TAKING FOR A LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amountToLoan = Number(inputLoanAmount.value);

  if (
    amountToLoan > 0 &&
    currentAccount.movements.some(mov => mov >= amountToLoan * 0.1)
  ) {
    //Add load
    currentAccount.movements.push(amountToLoan);

    //Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

//DELETING ACCOUNT
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

//SORTING MOVEMENTS
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//OTHER FUNCTION

labelBalance.addEventListener('click', function () {
  console.log(document.querySelectorAll('.movements__value'));
  //The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    currentElement => Number(currentElement.textContent.replace('💲', ''))
  );
  console.log(movementsUI);
});
