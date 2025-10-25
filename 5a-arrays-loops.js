// let fruits = ['Apple', 'Orange', 'Plum', 'Grapes'];

// alert(fruits[0]);
// alert(fruits[1]);

// Replacing an element
// fruits[2] = 'Pear';

// alert(fruits[2]);

// Add a new element in an array
// fruits[3] = 'Banana';

// alert(fruits[3]);

// // mix of values
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// // get the object at index 1 and then show its name
// alert( arr[1].name ); // John

// // get the function at index 3 and run it
// arr[3](); // hello

// alert(fruits[fruits.length-1])   // prints the last element

// alert( fruits.at(-1) )              // same as above

/*
============================================
METHODS THAT WORK AT THE END OF AN ARRAY
=============================================
*/

// let fruits = ['Apple'];

// fruits.push("Orange", "Peach");
// alert(fruits);

// fruits.pop()
// alert(fruits);

/*
============================================
METHODS THAT WORK AT THE BEGINNING OF AN ARRAY
=============================================
*/

// let fruits = ['Apple'];

// fruits.unshift("Orange", "Peach");
// alert(fruits);

// fruits.shift("Orange");
// alert(fruits);

/*
============================================
INTERNALS
=============================================
*/

// let fruits = ['banana'];
// let arr = fruits;

// arr.push('Pear');

// alert(fruits);
// alert(arr);

/*
============================================
TASKS
=============================================
*/

// 1) Is array copied?

// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// alert( fruits.length );

// 2) Array Operations

// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// styles[((styles.length - 1)/2)] = 'Classics';
// alert(styles);
// alert(styles.shift());
// styles.unshift("Rap", 'Reggae');
// alert(styles);

// 3) Calling in an array context

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2]()
1
// 4) Sum input numbers 

// function sumInput() {
//   numbers = [];

//   while (true) {

//     let value = prompt("Enter any number:", 0);

//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value); // turns a string input into integer1
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

/*
============================================
ARRAY METHODS
=============================================
*/

// let arr = ["I", "go", "home"];

// delete arr[1];
// console.log(arr)
// console.log(arr.length);
 
// The element was removed, but the array still has 3 elements

// let arr = ["I", "study", "right", "now"];
// console.log(arr)

// arr.splice(2, 0, "complex", "language") // from index 2, add this elements without any removals 

// arr.splice(0,3, "Let's","Dance"); // from index 0, remove 3 elements and replace

// console.log(arr)

// let arr = [0, 1, 2, 5];
// arr.splice(-1, 0, 3, 4); 

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4

/*
============================================
ARRAY FUNCTION
=============================================
*/

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       let tripledEvenNumber = array[i] * 3;
//       sum += tripledEvenNumber;
//     }
//   }
//   return sum;
// } 

// let arr = [1,2,3,4,5,6];
// console.log(sumOfTripledEvens(arr));
// console.log("\n");

/*
============================================
MAP METHOD
=============================================
*/

// function addOne(num) {
//   return num + 1;
// } 

// let arr = [0,1,2,3,4,5];
// let mappedArr = arr.map(addOne);
// console.log(arr);
// console.log(mappedArr);

// CALLBACK FUNCTION
// let arr = [1,2,3,4,5];
// // let mappedArr = arr.map((num) => num + 1);
// // console.log(mappedArr);

/*
============================================
FILTER METHOD
=============================================
*/

// function isOdd(num) {
  
//   return num % 2 != 0;
// }

// let arr = [1,2,3,4,5];
// let filteredArr = arr.filter(isOdd);

// console.log(arr);
// console.log(filteredArr);

/*
============================================
REDUCE METHOD
=============================================
*/

// const arr = [1,2,3,4,5];

// const productOfAllNums = arr.reduce((total, currentItem) => {
//   return total * currentItem;
// }, 1);

// console.log(productOfAllNums);
// console.log(arr);

/*
============================================
PRACTICE 
=============================================
*/
// let arr1 = [1,2,3,4,5,6];

// function sumOfTripledEvensThreeMethods(array) {
//   return array
//   .filter((num) => num % 2 == 0)
//   .map((num) => num * 3)
//   .reduce((total, currentNum) => {
//     return total + currentNum;
//   }, 0);
// } 
// console.log(sumOfTripledEvensThreeMethods(arr1));

/*
============================================
ASSIGNMENT 
=============================================
*/

let arr = [5, 3, 8, 1];

// From words-with-dashes to camelCase

// function camelize(str) {
//   return str
//   .split("-")
//   .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//   .join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("hero-image"));

// Filter Range

// function filterRange(arr, a, b) {
//   return arr
//   .filter(num => (num >= a && num <= b)); 
// }

// let filtered = filterRange(arr, 1, 7);

// console.log(filtered);

// Removes numbers in an array that are not in between the arguments

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;              // the contents moved to the left after splicing, this line prevents the skipping of one index 
//     }
//   }
// }

// console.log(arr);
// filterRangeInPlace(arr, 1, 5);
// console.log(arr);

// Sorts the number of array

// arr.sort((a,b) => a - b);   // sort ascending
// arr.sort((a,b) => b - a);   // sort descending
// console.log(arr);

// Copy and sort array

// let stringArray = ["HTML", "JavaScript", "CSS"];

// // function copySorted(arr) {       // my solution
// //   let copiedArray = arr.slice();
// //   return copiedArray.sort();
// // }

// function copySorted(arr) {          // shorter solution
//   return arr.slice().sort();
// }

// console.log(copySorted(stringArray));
// console.log(stringArray);

// Shuffle an array

// Solution 1 using Fisher-Yates Shuffle Modern Algorithm

let numbers = [1, 2, 3];
console.log(numbers);

let i = numbers.length;   // current value = 3
let j, temp;

while (i-- > 0) {          // current value = 2
  j = Math.floor(Math.random() * (i + 1));  // current value = 0 to 2 (random index)
  temp = numbers[j];    // stores the random index
  numbers[j] = numbers[i] // swapped values
  numbers[i] = temp; 
}

console.log(numbers);
