'use strict';

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

console.log('//********** CODING CHALLENGE 1 **********//');

console.log('\n');
console.log('***** Point 1 *****');

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

console.log('\n');
console.log('***** Point 2 *****');

Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

console.log('\n');
console.log('***** Point 3 *****');

Car.prototype.brake = function () {
  console.log((this.speed -= 5));
};

console.log('\n');
console.log('***** Point 4 *****');

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log('\n');
console.log('***** Test *****');

console.log('*** Car1 ***');
console.log(car1);
car1.accelerate();
car1.brake();

console.log('*** Car2 ***');
console.log(car2);
car2.accelerate();
car2.brake();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

console.log('\n');
console.log('//********** CODING CHALLENGE 2 **********//');

class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  get speedUS() {
    return `This ${this.brand} is going at ${this.speed / 1.6} mi/h`;
  }

  set speedUS(currentSpeed) {
    this.speed = currentSpeed * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`This ${this.brand} is going at ${this.speed} Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`This ${this.brand} is going at ${this.speed} Km/h`);
    return this;
  }
}

const myCar = new CarCl('Ford', 120);
console.log(myCar); //120km

console.log('\n');
myCar.accelerate(); //130km

console.log('\n');
myCar.accelerate(); //140km
console.log(myCar.speedUS); //87.5 mill

console.log('\n');
myCar.speedUS = 100;
console.log(myCar); //160km
console.log(myCar.speedUS); //100 mill

console.log('\n');
myCar.brake();
console.log(myCar.speedUS); //96.87 mill

console.log('\n');
myCar.speedUS = 56.3;
console.log(myCar); //90km
console.log(myCar.speedUS); //56.3 mill

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

console.log('\n');
console.log('//********** CODING CHALLENGE 3 **********//');

const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};

//Linking Prototypes
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

//Methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

//Testing//
const electricCar = new EV('Tesla', 120, 23);
console.log(electricCar);
electricCar.accelerate();
electricCar.brake();
electricCar.chargeBattery(90);
console.log(electricCar);

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

console.log('\n');
console.log('//********** CODING CHALLENGE 4 **********//');

class EVC1 extends CarCl {
  #charge;

  constructor(brand, speed, charge) {
    super(brand, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(
      `${this.brand} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `This ${this.brand} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const newCar = new EVC1('Rivian', 120, 23);
console.log(newCar);

console.log('\n');
newCar.accelerate();

console.log('\n');
newCar.accelerate().brake();

console.log('\n');
newCar.accelerate().brake().chargeBattery(90);

console.log('\n');
console.log(newCar.speedUS);
