'use strict';

console.log('//********** Arrays **********//');

console.log('\n');
console.log('/******* Some methods *******/');

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

console.log('\n');
console.log('***** Slice *****');
//slice(start , end(notincluded)) method returns a shallow copy of a portion of an array into a new array object. The original array will not be modified.

console.log(arr1.slice(1));
console.log(arr1.slice(1, 4));
console.log(arr1.slice(-2));
console.log(arr1.slice(2, -1));
console.log(arr1.slice());
console.log([...arr1]);

console.log('\n');
console.log('***** Splice *****');
/*splice(start , deleteCount(An integer indicating the number of elements in the array to remove from start.)) method changes the 
contents of an array by removing or replacing existing elements and/or adding new elements in place.*/

console.log(arr1.splice(7));
console.log(arr1);

console.log(arr1.splice(-1));
console.log(arr1);

console.log(arr1.splice(2, 2));
console.log(arr1);

console.log('\n');
console.log('***** Reverse *****');
/*reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.*/

const arr2 = ['q', 'p', 'o', 'n', 'm', 'l', 'k'];

console.log(arr2.reverse());
console.log(arr2);

console.log('\n');
console.log('***** Concat *****');
//concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const letters = arr1.concat(arr2);
console.log(letters);
console.log([...arr1, ...arr2]);

console.log('\n');
console.log('***** Join *****');
//join() method creates and returns a new string by concatenating all of the elements in an array separated by a specified separator string.
console.log(letters.join(' - '));

console.log('\n');
console.log('/******* Looping Arrays *******/');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('\n');
console.log('***** For *****');

for (const movement of movements) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
}

console.log('\n');

for (const [i, movement] of movements.entries()) {
  movement > 0
    ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

console.log('\n');
console.log('***** Foreach *****');

movements.forEach(function (movement) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
});
//0: function(200);
//1: function(450);
//2: function(-400);
//...

console.log('\n');

movements.forEach(function (value, position) {
  value > 0
    ? console.log(`Movement ${position + 1}: You deposited ${value}`)
    : console.log(`Movement ${position + 1}: You withdrew ${Math.abs(value)}`);
});

console.log('\n');
console.log('***** Foreach with Maps and Sets *****');

console.log('\n');
console.log('***** Foreach Maps *****');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('\n');
console.log('***** Foreach Sets *****');

const currenciesUnique = new Set(['USD', 'GRP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

console.log('\n');
console.log('******* Map , Filter and Reduce Methods *******');

/*The map(callback[currentValue, index, array]) method creates a new array populated with the results of calling a provided function 
on every element in the calling array.*/

console.log('\n');
console.log('***** Map Ex1 *****');

const eurTousd = 1.1;

const movementsUSD = movements.map(mov => mov * eurTousd);
console.log(movements);
console.log(movementsUSD);

console.log('\n');
console.log('***** Map Ex2 *****');

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movent ${i + 1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//The filter(callback[currentValue, index, array]) method creates a new array with all elements that pass the test implemented by the provided function.
console.log('\n');
console.log('***** Filter *****');

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const withdrawls = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawls);

/*The reduce(callback[currentValue, index, array] , initialValue) method executes a reducer function (that you provide) on each element of the array, 
resulting in single output value.*/
console.log('\n');
console.log('***** Reduce *****');

const balance = movements.reduce(function (accumulator, value, possition, arr) {
  console.log(`Iteration ${possition}: ${accumulator}`);
  return (accumulator += value);
}, 0);
console.log(balance);

//Max value
const balanceMaxValue = movements.reduce((acc, value) =>
  acc > value ? acc : value
);
console.log(balanceMaxValue);

console.log('\n');
console.log('/******* Chaining Methods *******/');

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurTousd)
  .reduce((acc, mov) => acc + mov, 0)
  .toFixed(2);
console.log(totalDepositsUSD);

/*The find(callback[element, index, array] , thisArg) method returns the value of the first element in the provided array that 
satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.*/
console.log('\n');
console.log('/******* Find Method *******/');

console.log('\n');
console.log('***** Find Ex1 *****');

const firstWithdrawl = movements.find(move => move < 0);
console.log(movements);
console.log(firstWithdrawl);

console.log('\n');
console.log('***** Find Ex2 *****');

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

const acccount = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(acccount);

console.log('\n');
console.log('/******* Some and Every Methods *******/');

console.log(movements);

/*The some(callback[element, index, array]) method tests whether at least one element in the array passes the test 
implemented by the provided function. It returns a Boolean value.*/
console.log('\n');
console.log('***** Some *****');

const anyDeposits = movements.some(mov => mov > 1500);
console.log(`Some movement > 1500 --> ${anyDeposits}`);

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
console.log('\n');
console.log('***** Every *****');

console.log(`Every movement > 0 --> ${movements.every(mov => mov > 0)}`);
console.log(account4.movements.every(mov => mov > 0));

console.log('\n');
console.log('/******* Flat and Flatmap Methods *******/');

//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log('\n');
console.log('***** Flat Level1 *****');
const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr3);
console.log(arr3.flat());

console.log('\n');
console.log('***** Flat Level2 *****');
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep);
console.log(arrDeep.flat(2));

console.log('\n');
console.log('***** Flat Ex *****');

const accountMovements = accounts.map(theAcc => theAcc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overAllMovements = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overAllMovements);

const overAllMovements2 = accounts
  .map(theAcc => theAcc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllMovements2);

/*The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then 
flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than 
calling those two methods separately.*/
console.log('\n');
console.log('***** Flatmap *****');

const overAllMovements3 = accounts
  .flatMap(theAcc => theAcc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllMovements3);

/*The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, 
built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.*/
console.log('\n');
console.log('/******* Sort Method *******/');

console.log('\n');
console.log('***** Sort with String *****');

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log(owners.sort());
console.log(owners);

console.log('\n');
console.log('***** Sort with Numbers *****');

console.log(movements);

console.log('\n');
console.log('***** Ascending *****');

console.log(movements.sort((a, b) => a - b));

console.log('\n');
console.log('***** Descending *****');

console.log(movements.sort((a, b) => b - a));

console.log('\n');
console.log('/******* Moreways of Creating and Filling Arrays *******/');

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

console.log('\n');
console.log('***** Fill Method Ex1 *****');

const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr4);
arr4.fill(23, 3, 6);
console.log(arr4);

console.log('\n');
console.log('***** Fill Method Ex2 *****');
const arr5 = new Array(7);
console.log(arr5);
arr5.fill(1, 3, 5);
console.log(arr5);

//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log('\n');
console.log('***** Array . from *****');

console.log('\n');
console.log('***** Array . from Ex1 *****');
const arr6 = Array.from({ length: 7 }, () => 1);
console.log(arr6);

console.log('\n');
console.log('***** Array . from Ex2 *****');
const arr7 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arr7);

console.log('\n');
console.log('***** Array . from Ex3 *****');
const arr8 = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 100) + 1
);
console.log(arr8);

console.log('\n');
console.log('***** Array . from Ex4 *****');
