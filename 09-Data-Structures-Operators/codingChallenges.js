'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('//********** CODING CHALLENGE 1 **********//');

//1. Create one player array for each team (variables 'players1' and 'players2')
console.log('\n');
console.log('***** Point 1 *****');

const theTeam1 = game.team1;
const [players1] = game.players;
console.log(`Team1: ${theTeam1} , Players: ${players1}`);

const theTeam2 = game.team2;
const [, players2] = game.players;
console.log(`Team2: ${theTeam2} , Players: ${players2}`);

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
console.log('\n');
console.log('***** Point 2 *****');

const [[goalkeeper, ...fieldPlayers]] = game.players;
console.log(
  `${theTeam1} --> Goal keeper: ${goalkeeper} , Field Players: ${fieldPlayers}`
);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
console.log('\n');
console.log('***** Point 3 *****');

const allPlayers = [...game.players];
console.log(`All Players: ${allPlayers}`);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
console.log('\n');
console.log('***** Point 4 *****');

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`All player who played during the game: ${players1Final}`);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log('\n');
console.log('***** Point 5 *****');

//Option1

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(
  `${theTeam1}'s Odd: ${team1} , Draw Odd: ${draw} , ${theTeam2}'s Odd: ${team2}`
);

//Option 2
// const team1Odd = game.odds.team1;
// console.log(`${team1} odd: ${team1Odd}`);

// const theDraw = game.odds.x;
// console.log(`Draw odd: ${theDraw}`);

// const team2Odd = game.odds.team2;
// console.log(`${team2} odd: ${team2Odd}`);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
//TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
console.log('\n');
console.log('***** Point 6 *****');

const printGoals = function (...playersName) {
  console.log(`Players: ${playersName} / Goals: ${playersName.length}`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
console.log('\n');
console.log('***** Point 7 *****');

console.log(
  `${
    (team1 < team2 && theTeam1) || (team1 > team2 && theTeam2)
  } is most likely to win`
);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

console.log('\n');
console.log('//********** CODING CHALLENGE 2 **********//');

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
console.log('\n');
console.log('***** Point 1 *****');

for (const [i, p] of game.scored.entries()) {
  console.log(`Goal ${i + 1}. ${p}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

console.log('\n');
console.log('***** Point 2 *****');

let total = 0;
const odds = Object.values(game.odds);

for (const odd of odds) {
  total += odd;
}

const oddsAverage = total / odds.length;

console.log(`The average odd is ${oddsAverage.toFixed(2)}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

console.log('\n');
console.log('***** Point 3 *****');

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
console.log('\n');
console.log('***** BONUS *****');

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

console.log(scorers);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log('\n');
console.log('//********** CODING CHALLENGE 3 **********//');

//1. Create an array 'events' of the different game events that happened (no duplicates)
console.log('\n');
console.log('***** Point 1 *****');

console.log(gameEvents);
console.log(gameEvents.values());

let events = [...gameEvents.values()];
console.log(events);

events = new Set(events);
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
console.log('\n');
console.log('***** Point 2 *****');

gameEvents.delete(64);
console.log(gameEvents);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log('\n');
console.log('***** Point 3 *****');

const ave = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${ave} minutes`);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//[FIRST HALF] 17: ⚽️ GOAL
console.log('\n');
console.log('***** Point 4 *****');

for (const [min, value] of gameEvents) {
  const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${min}: ${value}`);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

console.log('\n');
console.log('//********** CODING CHALLENGE 4 **********//');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const allText = document.querySelector('textarea').value;
  const words = allText.split('\n');

  const arrayOfFixedWords = [];
  for (const word of words) {
    arrayOfFixedWords.push(word.toLowerCase().trim());
  }
  //console.log(arrayOfFixedWords);

  const arrayOfMaxLengths = [];
  for (const word of arrayOfFixedWords) {
    arrayOfMaxLengths.push(word.length);
  }
  //console.log(arrayOfMaxLengths);
  //console.log(...arrayOfMaxLengths);

  const maxLength = Math.max(...arrayOfMaxLengths);
  //console.log(maxLength);

  for (const [i, word] of arrayOfFixedWords.entries()) {
    const splitedWords = word.split('_');
    //console.log(splitedWords);

    const [firstWord, secondWord] = splitedWords;

    const fixedSecondWord = secondWord.replace(
      secondWord[0],
      secondWord[0].toUpperCase()
    );

    const phrase = `${firstWord}${fixedSecondWord}`;

    const output = `${phrase.padEnd(maxLength)} ${'✅'.repeat(i + 1)}`;

    console.log(output);
  }
});
