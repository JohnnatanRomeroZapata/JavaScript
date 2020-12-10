'use strict';

console.log('//********** Functions **********//');

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);

  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 800);

console.log('\n');
console.log('***** *****');

const flight = 'LH234';
const johnnatan = {
  name: 'Johnnatan Romero',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  passenger.passport === 123456789
    ? alert('Check In')
    : alert('Wrong Passport');
};
checkIn(flight, johnnatan);
console.log(flight);
console.log(johnnatan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(johnnatan);
checkIn(flight, johnnatan);
console.log(flight);
console.log(johnnatan);

console.log('\n');
console.log('***** First-Class and Higher-Order Functions *****');

console.log('\n');
console.log('***** Function Accepting Callback Functions *****');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Name1', 'Name2', 'Name3'].forEach(high5);

console.log('\n');
console.log('***** Function Returning Functions *****');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Johnnatan');
greet('Hello')('My Friend');

const greet2 = greetingParam => nameParam =>
  console.log(`${greetingParam} ${nameParam}`);
greet2('Bonjour')('Jonathan');

console.log('\n');
console.log('***** The call and apply Methods *****');

const airline1 = {
  airline: 'Airline1',
  iatacode: 'LM',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};
airline1.book(123, 'Jonathan');
airline1.book(456, 'Paola');
console.log(airline1);

const airline2 = {
  airline: 'Airline2',
  iatacode: 'EW',
  bookings: [],
};

const book = airline1.book;

//Does NOT work because in regular functions the this key word points to undefined
//book(789 , 'New Passenger');

//CALL METHOD --> The call() method calls a function with a given this value and arguments provided individually.
console.log('\n');
console.log('***** Call Method *****');

book.call(airline2, 789, 'New Passenger');
console.log(airline2);

book.call(airline1, 753, 'New Passenger 1');
console.log(airline1);

const airline3 = {
  airline: 'Airline3',
  iatacode: 'XZ',
  bookings: [],
};
book.call(airline3, 159, 'New Passenger');
console.log(airline3);

//APPLY METHOD --> The apply() method calls a function with a given this value, and arguments provided as an array
console.log('\n');
console.log('***** Apply Method *****');

const flightData = [456, 'Sussan Garcia'];

book.apply(airline3, flightData);
book.call(airline3, ...flightData);

/*BIND METHOD --> The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.*/
console.log('\n');
console.log('***** Bind Method *****');

const bookA2 = book.bind(airline2);
bookA2(23, 'New Passenger with bind function');

const bookA223 = book.bind(airline2, 23); // -->the first argument (23) is already set
bookA223('JRZ');

//With Event Listeners
airline3.planes = 300;

airline3.buyNewPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', airline3.buyNewPlane.bind(airline3));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

console.log('\n');
console.log('***** Immediately Invoked Function Expressions (IIFE) *****');

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//This is a IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

console.log('\n');
console.log('***** Closures *****');
/* 
  Closure makes a function remember all variables that exist at birthplace.
  With closure, a function always has access to the variable environment of the execution context in which it was created, even when the execution context is gone.
  Closure has priority over the scope chain.
  Closure gives a function access to all the variables of its parent function, even after that parent function is gone.
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

console.log('\n');
console.log('***** Ex1 *****');

let f;

const g = function () {
  const a = 20;
  console.log(a);

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 100;
  console.log(b);

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

console.log('\n');
console.log('***** Ex2 *****');

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 4);
