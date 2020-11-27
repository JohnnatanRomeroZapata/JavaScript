///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

console.log("//********** Coding Challenge #1 **********//");

//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
console.log("\n");
console.log("***** Point 1 *****");

const calcAverage = (a, b, c) => (a + b + c) / 3;

//2. Use the function to calculate the average for both teams
console.log("\n");
console.log("***** Point 2 *****");

const dolphinesAverage1 = calcAverage(44, 23, 71);
const koalasAverage1 = calcAverage(65, 54, 49);
console.log(`Dolphins: ${dolphinesAverage1} , Koala: ${koalasAverage1}`);

const dolphinesAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);
console.log(`Dolphins: ${dolphinesAverage2} , Koala: ${koalasAverage2}`);

//3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
//and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
console.log("\n");
console.log("***** Point 3 *****");

const checkWinner = function (avgDolhins, avgKoalas) {
  //   avgDolhins > avgKoalas * 2
  //     ? console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`)
  //     : console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);

  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
  } else if (avgKoalas > avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
  } else {
    console.log("There is no winner");
  }
};

//4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
console.log("\n");
console.log("***** Point 4 *****");

checkWinner(dolphinesAverage1, koalasAverage1);
checkWinner(dolphinesAverage2, koalasAverage2);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

console.log("\n");
console.log("//********** Coding Challenge #2 **********//");

//1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above
//(you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
console.log("\n");
console.log("***** Point 1 *****");

const calcTip = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.2;
};
console.log(calcTip(100));

//2. And now let's use arrays! So create an array 'bills' containing the test data below.
//TEST DATA: 125, 555 and 44
console.log("\n");
console.log("***** Point 2 *****");
const arrayBills = [125, 555, 44];
console.log(arrayBills);

//3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
console.log("\n");
console.log("***** Point 3 *****");

const calcTip2 = function (array) {
  let arrayTips = [];

  for (const value of array) {
    const theTip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
    arrayTips.push(theTip);
  }

  return arrayTips;
};
const theArrayOftips = calcTip2(arrayBills);
console.log(calcTip2(arrayBills));

//4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
console.log("\n");
console.log("***** Point 4 *****");

const arrayTotal = [];

const billsWithTips = function () {
  for (const [i, value1] of arrayBills.entries()) {
    for (const [j, value2] of theArrayOftips.entries()) {
      const result = i === j ? true : false;

      if (result) {
        const total = value1 + value2;
        arrayTotal.push(total);
      } else {
        continue;
      }
    }
  }
  return arrayTotal;
};

console.log(billsWithTips());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

console.log("\n");
console.log("//********** Coding Challenge #3 **********//");

//1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
//2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
console.log("\n");
console.log("***** Point 1 and 2*****");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = (this.mass / this.height ** 2).toFixed(2));
  },
};
console.log(mark);

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = (this.mass / this.height ** 2).toFixed(2));
  },
};
console.log(john);

//3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
console.log("\n");
console.log("***** Point 3*****");
const result =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
    : `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`;
console.log(result);

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

console.log("\n");
console.log("//********** Coding Challenge #3 **********//");

console.log("\n");
console.log("***** Point 1 ,  2 and 3 *****");

//1. Create an array 'bills' containing all 10 test bill values
//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
//3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

console.log(bills);

for (const theBill of bills) {
  const theTip =
    theBill >= 50 && theBill <= 300 ? theBill * 0.15 : theBill * 0.2;
  tips.push(theTip);
}
console.log(tips);

for (const [thePositionInBills, theValueInBills] of bills.entries()) {
  for (const [thePositionIntips, theValueInTips] of tips.entries()) {
    if (thePositionInBills === thePositionIntips) {
      total.push(theValueInBills + theValueInTips);
    } else {
      continue;
    }
  }
}
console.log(total);

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

console.log("\n");
console.log("***** Point 4 *****");

const calcAverage2 = function (arr) {
  let final = 0;
  for (const i of arr) {
    final += i;
  }

  let av = 0;
  av = final / arr.length;

  console.log(av);
};

calcAverage2(bills);
calcAverage2(tips);
calcAverage2(total);
