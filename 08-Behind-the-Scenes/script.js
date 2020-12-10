"use strict";

//********** Scope and Scope Chain **********//
console.log("//********** Scope and Scope Chain **********//");

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} , born in ${birthYear}`;
    console.log(`This is the first output result: ${output}`);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //Creating NEW variable with same name as outer scope variable
      const firstName = "Paola";
      const str = `Oh, and you are a millenial, ${firstName}`;
      var millenial = true; //var is not block scope variable.

      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //Reassigning outer scope variable
      output = "NEW OUTPUT";
    }

    // console.log(str);
    console.log(
      `This result comes from a variable var inside of an if block -> ${millenial}`
    );
    // add(2, 3);
    console.log(`This is the second output result: ${output}`);
  }

  printAge();

  return age;
}

const firstName = "Jonathan";
calcAge(1985);
// console.log(age);

//********** Hoisting and TDZ (Time Deth Zone) **********//
console.log("\n");
console.log("//********** Hoisting and TDZ (Time Deth Zone) **********//");

console.log("\n");
console.log("***** Variables *****");

console.log(`Trying to print a var variable before declared -> ${me}`);
var me = "Jonathan"; //variables var are hosted but on value undefined

// console.log(job); --> it is going to show undeclared because jo is in TDZ
let job = "teacher";

// console.log(year); --> it is going to show undeclared because jo is in TDZ
const year = 1985;

console.log("\n");
console.log("***** Functions *****");

//addDec1 is a function declaration and we CAN used it before it is declared because they are stored in the variable environment object even before the code start executing
console.log(`Using a function declaration before declared -> ${addDecl(2, 3)}`);
function addDecl(a, b) {
  return a + b;
}

//addExpr is a function expression and we CANBNOT used it before it is declared because it is in TDZ (Time Deth Zone)
//console.log(addExpr(2, 3));
const addExpr = function (a, b) {
  return a + b;
};

//addArrow is a function expression. Because it is saved as var, it is stored as undefined
console.log(
  `Using an arrow function expression before declared -> ${addArrow}`
);
//console.log(addArrow(2, 3));
var addArrow = (a, b) => a + b;

console.log("\n");
console.log("***** Examples *****");

if (!numProducts) deleteShoppingCar();

var numProducts = 10;

function deleteShoppingCar() {
  console.log("All porducts deleted");
}

console.log("\n");
console.log("***** *****");

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//********** THIS keyword **********//
console.log("\n");
console.log("//********** THIS keyword **********//");

console.log("\n");
console.log(`${this} -> it is an object window`);

console.log("\n");
const calculAge = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(`${this} -> the word THIS is undefinded`);
};
calculAge(1985);

//Arrow functions do not have their own THIS key word
console.log("\n");
const calculArrow = (birthYear) => {
  console.log(2020 - birthYear);
  console.log(`${this} -> it is an object window`);
};
calculArrow(1985);

console.log("\n");
console.log("***** *****");

const jonathan = {
  year: 1985,
  calculAge: function () {
    console.log(this);
    console.log(2020 - this.year);
  },
};
jonathan.calculAge();

console.log("\n");
console.log("***** *****");

const paola = {
  year: 1988,
};
paola.calculAge = jonathan.calculAge;
paola.calculAge();

//********** Functions and Arrow Function **********//
console.log("\n");
console.log("//********** Functions and Arrow Function **********//");

//var fN = "Paola";

const johnnatan = {
  fN: "Johnnatan",
  year: 1985,
  calAge: function () {
    console.log(this);
    console.log(2020 - this.year);

    // const self = this;
    // const isMill = function () {
    //   //console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMill();

    const isMill = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMill();
  },
  greet: () => console.log(`Hey ${this.fN}`),
  // greet: function () {
  //   console.log(`Hey ${this.fN}`);
  // },
};
johnnatan.greet();
johnnatan.calAge();

//********** Argument keywords **********//
console.log("\n");
console.log("//********** Argument keywords **********//");

//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(2, 5);
addExpression(2, 5, 8, 12);

var addWithArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

//addWithArrow(2, 5, 8);

//********** Primitives vs Objects(Primitive vs Reference Types) **********//
console.log("\n");
console.log("//*** Primitives vs Objects(Primitive vs Reference Types) ***//");

let theAge = 35;
let oldAge = theAge;
theAge = 34;
console.log(theAge);
console.log(oldAge);

const minimi = {
  name: "John",
  age: 35,
};

const friend = minimi;

friend.age = 20;

console.log("Friend: ", friend);
console.log("Minimi: ", minimi);

console.log("\n");
console.log("***** *****");

console.log("Primitive Types");

let name1 = "Jonathan";
let name2 = name1;
name1 = "Paola";
console.log(name1, name2);

console.log("Reference Types");

const singleJessica = {
  fn1: "Jessica",
  ln1: "Williams",
  age: 27,
};

const marriedJessica = singleJessica;
marriedJessica.ln1 = "Davis";

console.log("Before marriage: ", singleJessica);
console.log("After marriage: ", marriedJessica);

const singleJessica2 = {
  fn1: "Jessica",
  ln1: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

console.log("\n");
console.log("***** *****");

//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

const marriedJessica2 = Object.assign({}, singleJessica2);
marriedJessica2.ln1 = "Davis";
marriedJessica2.family.push("New Member");

console.log("Before marriage: ", singleJessica2);
console.log("After marriage: ", marriedJessica2);
