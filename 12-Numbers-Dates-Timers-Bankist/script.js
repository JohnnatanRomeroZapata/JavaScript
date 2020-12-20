'use strict';

console.log('//********** Converting and Checking Numbers **********//');

console.log('\n');
console.log(23 === 23.0);
console.log(0.1 + 0.2);

console.log('\n');
console.log('***** Convertion *****');

console.log(Number('23'));
console.log(+'23');

console.log('\n');
console.log('/***** Parsing *****/');

console.log('\n');
console.log('***** Parsing Int *****');

console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23'));

console.log('\n');
console.log('***** Parsing Float *****');

console.log(Number.parseInt('   2.5rem   '));
console.log(Number.parseFloat('   2.5rem   '));

console.log('\n');
console.log('***** Checking if value is NaN *****');

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

console.log('\n');
console.log('***** Checking if value is number *****');

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log('\n');
console.log('***** Checking if value is Int *****');

console.log(Number.isInteger(20));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

console.log('\n');
console.log('//********** Math and Rounding **********//');

console.log('\n');
console.log('***** Sqr *****');

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log('\n');
console.log('***** Max *****');

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log('\n');
console.log('***** Min *****');

console.log(Math.min(5, 18, 23, 11, 2));

console.log('\n');
console.log('***** PI *****');

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log('\n');
console.log('***** Random *****');

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

console.log('\n');
console.log('***** Rounding Integers *****');

console.log('\n');
console.log('***** Trunc *****');

console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));

console.log('\n');
console.log('***** Round *****');

console.log(Math.round(23.4));
console.log(Math.round(23.9));

console.log('\n');
console.log('***** Ceil *****');

console.log(Math.ceil(23.4));
console.log(Math.round(23.9));

console.log('\n');
console.log('***** Floor *****');

console.log(Math.floor(23.4));
console.log(Math.floor(23.9));
console.log(Math.floor(-23.3));

console.log('\n');
console.log('***** Rounding Decimals *****');

console.log(Number((2.7).toFixed(0)));
console.log(Number((2.7).toFixed(3)));
console.log((2.345).toFixed(2));
console.log(Number((2.345).toFixed(2)));

console.log('\n');
console.log('//********** Remainder Operator **********//');

console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(5 % 2);

console.log(8 / 3); // 8 = 2 * 3 + 2
console.log(8 % 3);

const isEven = n => n % 2 === 0;

console.log(`8 isEven? ${isEven(8)}`);
console.log(`23 isEven? ${isEven(23)}`);
console.log(`514 isEven? ${isEven(514)}`);

console.log('\n');
console.log('//********** Big Int **********//');

console.log(1452365897568245854181581632n);
console.log(BigInt(1452365897568245854181581632));

console.log('\n');
console.log('//********** Creating Dates **********//');

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
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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

/////////
console.log('\n');

const dateNow = new Date();
console.log(dateNow);

console.log('\n');

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('Dec 24,2015'));
console.log(new Date(account1.movementsDates[0]));

console.log('\n');

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log('\n');

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with date
console.log('\n');

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); //get day of the moth
console.log(future.getDay()); //get day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142274980000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

console.log('\n');
console.log('//********** Operating With Dates **********//');

const future2 = new Date(2037, 10, 19, 15, 23);
console.log(+future2);

console.log('\n');

const calcDayPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDayPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

console.log('\n');
console.log('//********** SetTimeout and setInterval **********//');

console.log('\n');
console.log('***** SetTimeout *****');

const ingredients = ['olives', 'tomato'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

console.log('\n');
console.log('***** setInterval *****');

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 2000);
