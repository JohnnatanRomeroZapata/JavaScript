'use strict';

console.log('//********** OOP in JS **********//');

// JS does not have traditional classes. We create objects from a constructor function.

console.log('\n');
console.log('//***** Constructor *****//');

//Person would be the class
const Person = function (fn, by) {
  this.firstName = fn;
  this.birthYear = by;
};

/*
When we type the 'new' key word, this happens:
1. New empty object is created
2. Function is called, this = empty object
3. Empty object is linked to Prototype
4. Function automatically return the object
*/

//Johnnatan would be the object from the "class" Person
const johnnatan = new Person('Johnnatan', 1985);
console.log(johnnatan);

//Paola would be the object from the "class" Person
const paola = new Person('Paola', 1988);
console.log(paola);

console.log('\n');
console.log('//***** Prototypes *****//');
/*
- Prototypes are the mechanism by which JavaScript objects inherit features from one another.
- An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on.
- In JavaScript, a link is made between the object instance and its prototype

// Every object in JS has a prototype
*/

console.log(Person.prototype);

console.log('\n');
Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

johnnatan.calcAge();
paola.calcAge();

console.log('\n');
Person.prototype.species = 'Homo Sapiens';
console.log(johnnatan.species, paola.species);

console.log('\n');
console.log(johnnatan.hasOwnProperty('firstName'));
console.log(paola.hasOwnProperty('firstName'));

console.log('\n');

console.log(johnnatan.__proto__);
console.log(johnnatan.__proto__.__proto__); //Object.prototype (top of prototype chain)
console.log(johnnatan.__proto__.__proto__.__proto__);

console.log('\n');

console.dir(Person.prototype.constructor);

console.log('\n');

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1.__proto__);
console.log(arr1.__proto__.__proto__);

console.log('\n');
console.log('//***** Classes *****//');

/*
1. Classes are NOT hoisted -> we cannot use before they are declared.
2. Classes are first-class citizes -> We can pass them into function and also return them from functions.
3. Classes are executed in strict mode.
*/

//Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //All methods will be added to .prototype property and not in the object itself
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const newPerson1 = new PersonCl('Person1', 2000);

console.log(newPerson1);

newPerson1.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
newPerson1.greet();

console.log('\n');
console.log('//***** Getters and Setters *****//');

const account = {
  owner: 'Johnnatan',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log('\n');

class Person2Cl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //All methods will be added to .prototype property and not in the object itself
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

console.log(Person2Cl);

const john = new Person2Cl('Jonathan Romero', 1985);
console.log(john);

const pao = new Person2Cl('Paola', 1988);
console.log(pao);

console.log('\n');
console.log('//***** Statick Methods *****//');

Person2Cl.hey();

console.log('\n');
console.log('//***** Object.create *****//');

const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(fn, by) {
    this.firstName = fn;
    this.birthYear = by;
  },
};

const thePerson1 = Object.create(PersonProto);
console.log(thePerson1);
thePerson1.name = 'J';
thePerson1.birthYear = 1985;
thePerson1.calcAge();

const thePerson2 = Object.create(PersonProto);
thePerson2.init('theName', 1985);
thePerson2.calcAge();

console.log('\n');
console.log('//***** Inheritance between Classes *****//');

console.log('\n');
console.log('***** With Constructor Functions *****');

const Person2 = function (fn, by) {
  this.firstName = fn;
  this.birthYear = by;
};

Person2.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(Person2.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const student1 = new Student('Student1', 1991, 'CS');
console.log(student1);
student1.introduce();
student1.calcAge();
console.log(student1.__proto__);
console.log(student1.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log('\n');
console.log('***** With Classes *****');

class Person3Cl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //All methods will be added to .prototype property and not in the object itself
  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2020 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends Person3Cl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${2020 - this.birthYear} years old but I feel like ${
        2020 - this.birthYear + 10
      }`
    );
  }
}

const theStudent = new StudentCl('J R', 1985, 'CS');
theStudent.introduce();
theStudent.calcAge();
console.log(theStudent);
theStudent.calcAge();

console.log('\n');
console.log('***** With Object.create *****');

const Person2Proto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },

  init(fn, by) {
    this.firstName = fn;
    this.birthYear = by;
  },
};

const StudentProto = Object.create(Person2Proto);

StudentProto.init = function (firstName, birthYear, course) {
  Person2Proto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const myStudent = Object.create(StudentProto);
myStudent.init('MyStudent', 1985, 'JS');
myStudent.introduce();
myStudent.calcAge();

console.log('\n');
console.log('//***** CLASS EXAMPLE *****//');

class Account {
  //***Public field***//
  locale = navigator.language;

  //***Private field***//
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = []; // _movements -> the underline define the movements as protected
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${this.owner}`);
  }

  //***Public Methods***//

  getMovements() {
    return this.#movements;
  }

  deposit(ammount) {
    this.#movements.push(ammount);
    return this;
  }

  withdraw(ammount) {
    this.#movements.push(-ammount);
    return this;
  }

  requestLoan(ammount) {
    // if (this.#approveLoan(ammount)) {
    if (this._approveLoan(ammount)) {
      this.deposit(ammount);
      console.log('Loan Approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  //***Private Methods***//

  // #approveLoan() {
  _approveLoan() {
    return true;
  }
}

const account1 = new Account('JRZ', 'CAD', 1000);
console.log(account1);

account1.deposit(200);
account1.withdraw(100);
account1.requestLoan(2000);
console.log(account1.getMovements());
console.log(account1);
Account.helper();

account1
  .deposit(10)
  .deposit(20)
  .withdraw(15)
  .requestLoan(50000)
  .withdraw(10000);

console.log(account1.getMovements());
