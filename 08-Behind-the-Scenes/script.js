"use strict";

//********** Scope and Scope Chain **********//
console.log("//********** Scope and Scope Chain **********//");

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age} , born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //Creating NEW variable with same name as outer scope variable
      const firstName = "Paola";
      const str = `Oh, and you are a millenial, ${firstName}`;
      var millenial = true;

      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //Reassigning outer scope variable
      output = "NEW OUTPUT";
    }

    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Jonathan";
calcAge(1985);
// console.log(age);

//********** Hoisting and TDZ (Time Deth Zone) **********//
console.log("//********** Hoisting and TDZ **********//");

console.log("//***** Variables *****//");

console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonathan";
let job = "teacher";
const year = 1985;

console.log("//***** Functions *****//");

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
//console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log("//***** Examples *****//");

if (!numProducts) deleteShoppingCar();

var numProducts = 10;

function deleteShoppingCar() {
  console.log("All porducts deleted");
}

console.log("//***** *****//");

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//********** THIS keyword **********//
console.log("//********** THIS keyword **********//");

console.log("//***** *****//");

console.log(`${this} here it is an object window`);

console.log("//***** *****//");

const calculAge = function (birthYear) {
  console.log(2020 - birthYear);
  console.log(`${this} here it is undefinded`);
};

calculAge(1985);

console.log("//***** *****//");

const calculArrow = (birthYear) => {
  console.log(2020 - birthYear);
  console.log(`${this} here it is an object window`);
};

calculArrow(1985);

console.log("//***** *****//");

const jonathan = {
  year: 1985,
  calculAge: function () {
    console.log(this);
    console.log(2020 - this.year);
  },
};

jonathan.calculAge();

console.log("//***** *****//");

const paola = {
  year: 1988,
};

paola.calculAge = jonathan.calculAge;
paola.calculAge();

//********** Functions and Arrow Function **********//
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
console.log("//********** Argument keywords **********//");

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

console.log("//***** *****//");

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

console.log("//***** *****//");

const marriedJessica2 = Object.assign({}, singleJessica2);
marriedJessica2.ln1 = "Davis";
marriedJessica2.family.push("New Member");

console.log("Before marriage: ", singleJessica2);
console.log("After marriage: ", marriedJessica2);
