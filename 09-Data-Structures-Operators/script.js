'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at
    ${time}`);
  },

  orderPasta: function (in1, in2, in3) {
    console.log(`Here is your delicious pasta with ${in1}, ${in2}, ${in3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//****************************************************************//

//MAPS
console.log('\n');
console.log('//********** MAPS **********//');

//Section 1
console.log('\n');
console.log('*** Section 1 ***');

const restaurantMap = new Map();
restaurantMap.set('Name', 'Classico Italiano');
restaurantMap.set(1, 'Firenze, Italy');
restaurantMap.set(2, 'Lisbon, Portugal');
console.log(restaurantMap);

restaurantMap
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open 😀')
  .set(false, 'We are closed 😟');

console.log(restaurantMap.get('Name'));
console.log(restaurantMap.get(true));
console.log(restaurantMap.get(1));

const time = 8;
const openOrClosed = restaurantMap.get(
  time > restaurantMap.get('Open') && time < restaurantMap.get('Close')
);
console.log(openOrClosed);

console.log(restaurantMap.has('Categories'));

restaurantMap.delete(2);
console.log(restaurantMap);

console.log(restaurantMap.size);

const arr3 = [1, 2];
restaurantMap.set(arr3, 'Test');
console.log(restaurantMap);
console.log(restaurantMap.get(arr3));

restaurantMap.clear();
console.log(restaurantMap);

//Section 2
console.log('\n');
console.log('*** Section 2 ***');

const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['Correct', 3],
  [true, 'Correct 🎊'],
  [false, 'Try Again!'],
]);

console.log(question);

//Converting Objects to Maps
console.log('\n');
console.log('Object');
console.log(Object.entries(restaurant.openingHours));
console.log('From Object to Map');
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

console.log(question.get('Question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const theAnswer = Number(prompt('Your answer'));

console.log(question.get(theAnswer === question.get('Correct')));

//Converting Map to Array
console.log('\n');
console.log('From Map to Array');
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

//SETS --> does not have indexes
//     --> we cannot retreave values from a set
console.log('\n');
console.log('//********** SETS **********//');

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pizza',
]);

console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
console.log(staff);

const setOfStaff = new Set(staff);
console.log(setOfStaff);

const fromSetToAnArray = [...new Set(staff)];
console.log(fromSetToAnArray);

console.log(setOfStaff.size);

ordersSet.clear();
console.log(ordersSet);

//Looping Objects
console.log('\n');
console.log('//********** LOOPING OBJECTS **********//');

//Properties NAMES
console.log('\n');
console.log('*** Loping Objects - NAMES ***');
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//Property VALUES
console.log('\n');
console.log('*** Loping Objects - VALUES ***');
const values = Object.values(restaurant.openingHours);
console.log(values);

//Entire Object
console.log('\n');
console.log('*** Loping Objects - Entire Object ***');
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Optional Chaining
console.log('\n');
console.log('//********** OPTIONAL CHAINING **********//');

//Before Optional Chaining
console.log('\n');
console.log('*** Before Optional Chaining ***');

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//After Optional Chaining
console.log('\n');
console.log('*** After Optional Chaining ***');

console.log(restaurant.openingHours.mon?.open);

//Example
console.log('\n');
console.log('*** Optional Chaining Ex***');

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const varOpen = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(
    `${varOpen === 'Closed' ? 'Closed' : `On ${day}, we open at ${varOpen}`}`
  );
}

//Optional Chaining on Mehtods
console.log('\n');
console.log('*** Optional Chaining on Mehtods ***');

console.log(restaurant.order?.(0, 1) ?? ' Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? ' Method does not exist');

//Optional Chaining on Arrays
console.log('\n');
console.log('*** Optional Chaining on Arrays ***');

const users = [{ name3: 'J', email: 'a@a.com' }];

console.log(users[0]?.name3 ?? 'Empty Array');
console.log(users[0]?.email ?? 'Empty Array');
console.log(users[1]?.name3 ?? 'Empty Array');

//Enhanced Object Literals
console.log('\n');
console.log('//********** ENHANCED OBJECT LITERALS **********//');

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHours2 = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },

  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  name2: 'Classico Italiano',
  location2: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories2: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu2: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu2: ['Pizza', 'Pasta', 'Risotto'],

  openingHours2,

  order2(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery2({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at
    ${time}`);
  },

  orderPasta2(in1, in2, in3) {
    console.log(`Here is your delicious pasta with ${in1}, ${in2}, ${in3}`);
  },

  orderPizza2(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
console.log(restaurant2);

//Looping Arrays
console.log('\n');
console.log('//********** LOOPING ARRAYS **********//');

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

for (const [i, element] of menu2.entries()) {
  console.log(`${i + 1}. ${element}`);
}

//The Nullish Coalescing Operator(??)
console.log('\n');
console.log('//********** THE NULLISH COALESCING OPERATOR (??) **********//');

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

//?? --> Nullish: null or undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

//Short Circuiting(&& and ||)
console.log('\n');
console.log('//********** SHORT CIRCUITING (&& and ||) **********//');

//Short Circuiting with OR --> It will return the first truly value.
console.log('\n');
console.log('*** Short Circuiting with OR ***');

console.log(3 || 'Johnnatan');
console.log('' || 'Johnnatan');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//Short Circuiting with AND --> It will return the first falsy value
//                          --> if values are true, it will return the last one.
console.log('\n');
console.log('*** Short Circuiting with AND ***');

console.log(0 && 'Johnnatan');
console.log(7 && 'Johnnatan');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

//RestPattern and Parameters -> collect multiple elements and pack them into an array
console.log('\n');
console.log('//********** RESTPATTERN AND PARAMETERS **********//');

//REST -> because the spread operator is on the LEFT side of symbol =
//REST must be last element
console.log('\n');
console.log('*** Resting an array Ex1 ***');
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others);

console.log('\n');
console.log('*** Resting an array Ex2 ***');
const [pi, , ri, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pi, ri, otherFood);

//With Objects.
console.log('\n');
console.log('*** REST with Objects ***');
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//With Functions
console.log('\n');
console.log('*** REST with Functions ***');

console.log('\n');
console.log('*** REST with Functions Ex1 ***');
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

console.log('\n');
console.log('*** REST with Functions Ex2 ***');
const g = [23, 5, 7];
add(...g);

console.log('\n');
console.log('*** REST with Functions Ex3 ***');
restaurant.orderPizza(
  'Ingredient 1',
  'Ingredient2',
  'Ingredient3',
  'Ingredient4'
);

//Spread Operator:
//SPREAD -> because the spread operator is on the RIGHT side of symbol =
//They are expected when we pass arguments into a function or when we build a new array
console.log('\n');
console.log('//********** SPREAD OPERATOR **********//');

console.log('\n');
console.log('*** Spreading array Ex1 ***');
const arr2 = [7, 8, 9];
const badNewArray = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArray);

console.log('\n');
console.log('*** Spreading array Ex2.1 ***');
const newArray = [1, 2, ...arr2];
console.log(newArray);

console.log('\n');
console.log('*** Spreading array Ex2.2 ***');
console.log(...newArray);

console.log('\n');
console.log('*** Spreading array and adding more info ***');
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy Array
console.log('\n');
console.log('*** Spreading an Array and Getting a copy from it ***');
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 or more arrays
console.log('\n');
console.log('*** Spreading and Joining 2 or more Arrays ***');
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

//Iterables are: arrays, Strings, Maps , Sets. NOT objects.
const str1 = 'Jonathan';
const letters = [...str1, ' ', 'S.'];
console.log(letters);

console.log('\n');
console.log('*** Using Spread Array with a Method ***');
const ingredients = [
  prompt("Let's make pasta. Ingredient1"),
  prompt("Let's make pasta. Ingredient2"),
  prompt("Let's make pasta. Ingredient3"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
console.log('\n');
console.log('*** Spreading an Object and Generating a Copy from an Object ***');
const theNewRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(theNewRestaurant);

const restaurantCopy = { ...theNewRestaurant };
restaurantCopy.name = 'New name of the restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Destructuring Objects
console.log('\n');
console.log('//********** DESTRUCTING OBJECTS **********//');

console.log('\n');
console.log('*** Destructuring an Object Ex1 ***');
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

console.log('\n');
console.log('*** Destructuring an Object Ex2 ***');
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
console.log('\n');
console.log('*** Destructuring with Default Values ***');
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
console.log('\n');
console.log('*** Destructuring with Mutating Variables ***');
let a = 111;
let b = 999;
const obj = { a: 23, b: 27, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
console.log('\n');
console.log('*** Destructuring Nested Objects ***');
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

console.log('\n');
console.log('*** Destructuring and Objects with a Method ***');
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

console.log('\n');
console.log(
  '*** Destructuring and Objects with a Method and Default Values***'
);
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

//Destructuring Arrays
console.log('\n');
console.log('//********** DESTRUCTURING ARRAYS **********//');

console.log('\n');
console.log('*** Destructuring Arrays Ex1 ***');
const arr1 = [2, 3, 4];
const [x, y, z] = arr1;
console.log(x, y, z);
console.log(arr1);

console.log('\n');
console.log('*** Destructuring Arrays Ex2 ***');
let [Option1, , Option2] = restaurant.categories;
console.log(Option1, Option2);

// const temp = Option1;
// Option1 = Option2;
// Option2 = temp;

// console.log(Option1, Option2);

[Option1, Option2] = [Option2, Option1];
console.log(Option1, Option2);

console.log('\n');
console.log('*** Destructuring Arrays with Method ***');

console.log('\n');
console.log('*** Destructuring Arrays with Method Ex1 ***');
console.log(restaurant.order(2, 0));

console.log('\n');
console.log('*** Destructuring Arrays with Method Ex2 ***');
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter} , ${mainCourse}`);

//Nested Destructuring
console.log('\n');
console.log('*** Destructuring Nested Arrays ***');

const nested = [2, 4, [5, 6]];

console.log('\n');
console.log('*** Destructuring Nested Arrays Ex1 ***');
const [i, , j] = nested;
console.log(i, j);

console.log('\n');
console.log('*** Destructuring Nested Arrays Ex2 ***');
const [l, , [m, n]] = nested;
console.log(l, m, n);

//Default Values
console.log('\n');
console.log('*** Destructuring Arrays with Default Values ***');
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
