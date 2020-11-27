console.log('//********** Working with Strings **********//');

console.log('\n');
console.log('***** Part 1 *****');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('Middle Seat 😯')
    : console.log('Lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log('\n');
console.log('***** Part 2 *****');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fixing Name
console.log('***** Fixing Name *****');
const passenger = 'jOhNnAtHaN';
const passengerLower = passenger.toLowerCase();
const correctPassenger =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctPassenger);

//Checking Email
console.log('***** Checking Email *****');
const email = 'hello@jonathan.com';
const loginEmail = '   hello@jonathan.Com \n';

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
console.log('***** Replacing *****');
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

const announcment = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcment);
console.log(announcment.replaceAll('door', 'gate'));

//Booleans
console.log('***** Booleans *****');
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));
console.log(plane2.startsWith('A32'));

const result =
  plane2.startsWith('A') && plane2.endsWith('neo')
    ? 'Part of NEW family Aneo'
    : 'No part of New family';
console.log(result);

//Practice Exercise
console.log('***** Practice Exercise *****');
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  console.log(
    baggage.includes('knife') || baggage.includes('gun')
      ? 'You are not allowed on board'
      : 'Welcome aboard'
  );
};
checkBaggage('I have a laptop , some food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('\n');
console.log('***** Part 3 *****');

//Split and Joining
console.log('***** Split and Joining *****');

console.log('a+very+nice+string'.split('+'));
console.log('Johnnatan Romero'.split(' '));

const [firstName, lastName] = 'Johnnatan Romero'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonathan romero');
capitalizeName('paola garcia');

//Padding
console.log('***** Padding *****');
const message = 'Go to gate 23';
console.log(message.padStart(message.length + 3, '*'));
console.log(
  message.padStart(message.length + 3, '*').padEnd(message.length + 3 + 3, '*')
);

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(5143487601));
console.log(maskCreditCard('123456789'));

//Repeat
console.log('***** Repeat *****');
const repeatedMessage = 'Bad weather... All departures delayed. ';
console.log(repeatedMessage.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInline(3);
planesInline(5);
planesInline(7);
