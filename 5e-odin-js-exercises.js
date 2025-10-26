/*
====================================
EXERCISE 06 - repeatString
====================================
*/

// function repeatString(str, times) {
//   if (times < 0 ) return "ERROR";
//   let word = [];
//   for (let i = 0; i < times; i++) {
//     word.push(str);
//   }
//   return word.join("");
// }

// console.log(repeatString('hey', -1));

/*
====================================
Exercise 07 - Reverse a String
====================================
*/

// function reverseString(str) {
//   let val = [...str];
//   let reversedString = [];
//   for (let i = val.length - 1; i >= 0; i--) {
//     reversedString.push(val[i]);
//   }
//   return reversedString.join("");
// }

// console.log(reverseString('hello world'));

/*
====================================
Exercise 08 - removeFromArray
====================================
*/

// function removeFromArray(arr, arg) {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arg) {  // if the current element is equal to the argument
//       let indexToRemove = arr.indexOf(arr[i]);   // this assigns the index of that element so it can be removed
//       arr.splice(indexToRemove, 1);
//     }
//   }
//   return arr;
// }

// console.log(removeFromArray([1,2,3,4], 3));

// function removeFromArray(array, ...args) {
//   const newArray = [];
  
//   array.forEach((item) => {
//     if (!args.includes(item)) { // add the item into the new array except for the one that should be removed
//       newArray.push(item);
//     }
//   });
//   return newArray;
// } 

// console.log(removeFromArray([1,2,3,4,5], 3));

// Using filter()

// function removeFromArray(array, ...args) {
//   return array.filter(val => !args.includes(val));
// }

// console.log(removeFromArray([1,2,3,4,5], 2,3));

/*
====================================
Exercise 09 - sumAll
====================================
*/

// function sumAll(num1, num2) {
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
//   if (num1 < 0 || num2 < 0) return 'ERROR'  // guard clauses

//   let temp;
//   let numbers = [];
//   let sum = 0;
//   if (num1 > num2) {
//     temp = num1;
//     num1 = num2;      // num1 is now lowest
//     num2 = temp;      // num2 is now highest
//   }
//   numbers.push(num1); // number array contains the smallest number 

//   for (let i = num1 + 1; i <= num2; i++) {  // if the num + 1 is smaller than or greater the num2, add that that to the empty array
//     numbers.push(i);
//   }

//   numbers.map(num => sum += num); // maps to each of the elements of an array and adds them to the empty sum;
//   return sum;
// }

// console.log(sumAll(10,-1));

/*
====================================
Exercise 10 - leapYears
====================================
*/

// function leapYears(year) {
//   if (
//     (year % 4 === 0 && year % 100 != 0) || 
//     (year % 100 === 0 && year % 400 === 0)) {
//       return `${year} is a leap year`;
//   } else {
//     return `${year} is not a leap year`;
//   }
// }

// console.log(leapYears(2000));
// console.log(leapYears(1900))

/*
====================================
Exercise 11 - tempConversion
====================================
*/

function convertToCelsius(temperature, str) {
  let convertedTemp;
  if (str === 'K') {
    convertedTemp = temperature - 273.15;
    return parseFloat(convertedTemp.toFixed(1)) + ' °C';
  } else if (str === 'F') {
    convertedTemp = (temperature - 32) * (5/9);
    return parseFloat(convertedTemp.toFixed(1)) + ' °C';
  } else if (str === 'R') {
    convertedTemp = (temperature - 491.67) * (5/9);
    return parseFloat(convertedTemp.toFixed(1)) + ' °C';
  } else {
    return 'Invalid Temperature Unit';
  }
}

// console.log(convertToCelsius(23, 'R'));
  
function convertToFahrenheit(temperature, str) {
  let convertedTemp;
  if (str === 'C') {
    convertedTemp = temperature * (9/5) + 32;
    return parseFloat(convertedTemp.toFixed(1)) + ' °F';
  } else if (str === 'K') {
    convertedTemp = (temperature * (9/5)) - 459.67;
    return parseFloat(convertedTemp.toFixed(1)) + ' °F';
  } else if (str === 'R') {
    convertedTemp = temperature - 459.67;
    return parseFloat(convertedTemp.toFixed(1)) + ' °F';
  } else {
    return 'Invalid Temperature Unit';
  }
}

console.log(convertToFahrenheit(23, 'K'));