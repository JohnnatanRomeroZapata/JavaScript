// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let arrayOfTemperatures = [12, 5, -5, 0, 4];
let stringResult = "";

function printForecast(temps) {
  for (let i = 0; i < temps.length; i++) {
    let currentTemperature = temps[i];

    stringResult += ` ${currentTemperature}C in day ${i + 1} \n`;
  }

  console.log(stringResult);
}

printForecast(arrayOfTemperatures);
