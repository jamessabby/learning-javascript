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

function sumOfTripleEvens(array) {
  let sum = 0;
  for (let i = 0; i <= array.length; i++  ) {
    if (array[i] % 2 == 0) {
      sum += array[i] * 3;
    }
  }
  return sum;
}

let arr = [0,1,2,3,4,5,6];

console.log(sumOfTripleEvens(arr));