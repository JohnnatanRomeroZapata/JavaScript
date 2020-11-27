"use strict";

//USE STRICT
console.log("//********** USE OF 'use strict' **********//");

let hasDriversLicense = false;
const passLtest = true;

if (passLtest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 😎");

//const interface = "Audio";
//const private = 534;

//FUNCTIONS
console.log("\n");
console.log("//********** FUNCTIONS **********//");

function logger() {
  console.log("My name is Jonathan");
}
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  console.log(juice);
}
fruitProcessor(3, 4);

console.log("\n");
console.log("***** Declaration vs Expression *****");

//Funtion Declaration
console.log("\n");
console.log("***** Declaration *****");

console.log(`your age is ${calcAge1(1985)}`); //call bedore declared
function calcAge1(birthYear) {
  return 2020 - birthYear;
}
console.log(`your age is ${calcAge1(1985)}`);

//Function Expression
console.log("\n");
console.log("***** Expression *****");

//console.log(`your age is ${calcAge2(1985)}`); --> cannot be access before initialization
const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};
const age2 = calcAge2(1985);
console.log(`your age is ${age2}`);

//Arrow Function
console.log("\n");
console.log("***** Arrow Function *****");

const calcAge3 = (birthYear) => 2020 - birthYear;
const age3 = calcAge3(1985);
console.log(`your age is ${age3}`);

const yearsUntilRetrirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetrirement(1985, "Johnnatan"));

//Functions insede functions
console.log("\n");
console.log("***** Functions inside functions *****");

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
  return juice;
}

const result = fruitProcessor(2, 3);
console.log(result);

//Reviewing Functions
console.log("\n");
console.log("***** Reviewing Functions *****");

const calcAge4 = function (birthYear) {
  return 2020 - birthYear;
};

const yearsUntilRetrirement2 = function (birthYear, firstName) {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} is already retired`;
  }
};

const result2 = yearsUntilRetrirement2(1985, "Johnnatan");
console.log(result2);

const result3 = yearsUntilRetrirement2(1950, "Johnnatan");
console.log(result3);

//ARRAYS
console.log("\n");
console.log("//********** ARRAYS **********//");

const friend1 = "Friend1";
const friend2 = "Friend2";
const friend3 = "Friend3";

const friends = ["Friend1", "Friend2", "Friend3"];
console.log(friends);

const years = new Array(1985, 2000, 2020, 2008);
console.log(years);

console.log(`friends[0]: ${friends[0]}`);
console.log(`years[2]: ${years[2]}`);

console.log(
  `Friends Array Length: ${friends.length}, Years Array Length: ${years.length}`
);

friends[2] = "NewFriend";
console.log(friends);

//Adding Elements
console.log("\n");
console.log("***** Adding Elements *****");

friends.push("FriendWithPush");
console.log(friends);

friends.unshift("FriendWithUnshift");
console.log(friends);

//Removing Elements
console.log("\n");
console.log("***** Removing Elements *****");

const popped = friends.pop(); //Remove Last
console.log(friends);
console.log(`Element popped: ${popped}`);

const shiftted = friends.shift(); //Remove first
console.log(friends);
console.log(`Element shiftted: ${shiftted}`);

console.log(`Index of Friend2: ${friends.indexOf("Friend2")}`);

console.log(
  `Friend1 is included in array friends? ${friends.includes("Friend1")}`
);

console.log(
  `MyFriend is included in array friends? ${friends.includes("MyFriend")}`
);

//OBJECTS
console.log("\n");
console.log("//********** OBJECTS **********//");

const johnnatan = {
  firstName: "Johnnatan",
  lastName: "Romero",
  birthYear: 1985,
  activity: "Student",
  friends: ["friend1", "friend2", "friend3"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2020 - this.birthYear;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.age}-year old ${this.activity} , and he ${
        this.hasDriversLicense ? "has" : "has not"
      } a diver's license`
    );
  },
};

console.log(johnnatan);
console.log(johnnatan.lastName);
console.log(johnnatan["firstName"]);

const nameKey = "Name";
console.log(johnnatan["first" + nameKey], johnnatan["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Johnnatan? Choose firstName, lastName, age, activity or friends?"
);

if (johnnatan[interestedIn]) {
  console.log(johnnatan[interestedIn]);
} else {
  console.log("Wrong request!");
}

johnnatan.location = "Canada";
johnnatan["cellphone"] = "(111)-222-3333";
console.log(johnnatan);

console.log(
  `${johnnatan.firstName} has ${johnnatan.friends.length} friends and his best friend is ${johnnatan.friends[0]}`
);

console.log("\n");
console.log("***** Object methods *****");

console.log(`Johnnatan age: ${johnnatan.calcAge()}`);
console.log(`Johnnatan age: ${johnnatan.age}`);

console.log("\n");
console.log("***** Small Challenge *****");

johnnatan.getSummary();

//FOR LOOP
console.log("\n");
console.log("//********** FOR LOOP **********//");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

console.log("\n");
console.log("***** Looping Arrays *****");

console.log("\n");
console.log("***** Ex1 *****");

const johnnatanArray = [
  "Johnnatan",
  "Romero",
  2020 - 1985,
  "student",
  ["Friend1", "Friend2", "Friend3"],
];

for (const i of johnnatanArray) {
  console.log(i);
}

console.log("\n");
console.log("***** Ex2 *****");

const years2 = [1991, 2007, 1969, 2020];
const age = [];

for (const i of years2) {
  age.push(2020 - i);
}
console.log(age);

console.log("\n");
console.log("***** Looping Arrays Backwards *****");

for (let i = johnnatanArray.length - 1; i >= 0; i--) {
  console.log(johnnatanArray[i]);
}

//WHILE LOOP
console.log("\n");
console.log("//********** WHILE LOOP **********//");

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetitions ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice} 🎲`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You rolled a 6 🎲 end of the game`);
