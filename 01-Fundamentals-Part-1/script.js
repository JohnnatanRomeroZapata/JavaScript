//********** Challenge 1 **********//
console.log('********** Challenge 1 **********');

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = (markWeight / (markHeight ** 2)).toFixed(2);
let johnBMI = (johnWeight / (johnHeight ** 2)).toFixed(2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher thant John's BMI (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher thant Mark's BMI (${markBMI})`);
}

//***********//

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = (markWeight / (markHeight ** 2)).toFixed(2);
johnBMI = (johnWeight / (johnHeight ** 2)).toFixed(2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher thant John's BMI (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher thant Mark's BMI (${markBMI})`);
}


//********** Challenge 2 **********//
console.log('********** Challenge 2 **********');

//*****Part 1 *****//
let dolphinsScore = [96, 108, 89];
let dolphinsTotalScore = 0;
let dolphineAverageScore = 0;

for (i = 0; i < dolphinsScore.length; i++) {
    dolphinsTotalScore += dolphinsScore[i];
}

dolphineAverageScore = (dolphinsTotalScore / dolphinsScore.length).toFixed(2)

let koalasScore = [88, 91, 110];
let koalasTotalScore = 0;
let koalasAverageScore = 0;

for (i = 0; i < koalasScore.length; i++) {
    koalasTotalScore += koalasScore[i];
}

koalasAverageScore = (koalasTotalScore / koalasScore.length).toFixed(2)

if (dolphineAverageScore < koalasAverageScore) {
    console.log(`Koalas Average Score = ${koalasAverageScore} 🏆 > Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore === koalasAverageScore) {
    console.log(`Koalas Average Score = ${koalasAverageScore} = Dolphines Average Score = ${dolphineAverageScore}`);
}
else {
    console.log(`Dolphines Average Score = ${dolphineAverageScore} 🏆 > Koalas Average Score = ${koalasAverageScore}`);
}


//*****Part 2 *****//

dolphinsScore = [97, 112, 101];
dolphinsTotalScore = 0;
dolphineAverageScore = 0;

for (i = 0; i < dolphinsScore.length; i++) {
    dolphinsTotalScore += dolphinsScore[i];
}

dolphineAverageScore = (dolphinsTotalScore / dolphinsScore.length).toFixed(2)

koalasScore = [109, 95, 123];
koalasTotalScore = 0;
koalasAverageScore = 0;

for (i = 0; i < koalasScore.length; i++) {
    koalasTotalScore += koalasScore[i];
}

koalasAverageScore = (koalasTotalScore / koalasScore.length).toFixed(2)

if (dolphineAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas Average Score = ${koalasAverageScore} 🏆 > Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore === koalasAverageScore) {
    console.log(`Koalas Average Score = ${koalasAverageScore} = Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore > koalasAverageScore && dolphineAverageScore >= 100) {
    console.log(`Dolphines Average Score = ${dolphineAverageScore} 🏆 > Koalas Average Score = ${koalasAverageScore}`);
}
else {
    console.log(`No one wins the 🏆`);
}

//*****Part 3 *****//

dolphinsScore = [97, 112, 101];
dolphinsTotalScore = 0;
dolphineAverageScore = 0;

for (i = 0; i < dolphinsScore.length; i++) {
    dolphinsTotalScore += dolphinsScore[i];
}

dolphineAverageScore = (dolphinsTotalScore / dolphinsScore.length).toFixed(2)

koalasScore = [109, 95, 106];
koalasTotalScore = 0;
koalasAverageScore = 0;

for (i = 0; i < koalasScore.length; i++) {
    koalasTotalScore += koalasScore[i];
}

koalasAverageScore = (koalasTotalScore / koalasScore.length).toFixed(2)

if (dolphineAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas Average Score = ${koalasAverageScore} 🏆 > Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore === koalasAverageScore && (dolphineAverageScore >= 100 && koalasAverageScore >= 100)) {
    console.log(`Koalas Average Score = ${koalasAverageScore} = Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore > koalasAverageScore && dolphineAverageScore >= 100) {
    console.log(`Dolphines Average Score = ${dolphineAverageScore} 🏆 > Koalas Average Score = ${koalasAverageScore}`);
}
else {
    console.log(`No one wins the 🏆 😭`);
}

//*****Part 4 *****//

dolphinsScore = [97, 112, 81];
dolphinsTotalScore = 0;
dolphineAverageScore = 0;

for (i = 0; i < dolphinsScore.length; i++) {
    dolphinsTotalScore += dolphinsScore[i];
}

dolphineAverageScore = (dolphinsTotalScore / dolphinsScore.length).toFixed(2)

koalasScore = [109, 95, 86];
koalasTotalScore = 0;
koalasAverageScore = 0;

for (i = 0; i < koalasScore.length; i++) {
    koalasTotalScore += koalasScore[i];
}

koalasAverageScore = (koalasTotalScore / koalasScore.length).toFixed(2)

if (dolphineAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas Average Score = ${koalasAverageScore} 🏆 > Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore === koalasAverageScore && (dolphineAverageScore >= 100 && koalasAverageScore >= 100)) {
    console.log(`Koalas Average Score = ${koalasAverageScore} = Dolphines Average Score = ${dolphineAverageScore}`);
}
else if (dolphineAverageScore > koalasAverageScore && dolphineAverageScore >= 100) {
    console.log(`Dolphines Average Score = ${dolphineAverageScore} 🏆 > Koalas Average Score = ${koalasAverageScore}`);
}
else {
    console.log(`No one wins the 🏆 😭`);
}


//********** Challenge 3 **********//
console.log('********** Challenge 3 **********');

let bill = 275;
let tip = 0;

tip = (bill >= 50 && bill <= 300) ? 15 : 20;

let total = bill + (bill * (tip / 100));

console.log(`Bill = ${bill}
Tip =  ${bill * (tip / 100)} (${tip}%)
Total = ${total}`);