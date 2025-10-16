/*

function favoriteAnimal(animal) {
 return animal + " is my favorite animal"; 
}

const message = favoriteAnimal('Lion');

console.log(favoriteAnimal('Lion'));

function random(number) {
  return Math.floor(Math.random() * number);       // it doesn't require any parameters
};

console.log(random(4))

*/

/*
==========================
INVOKING FUNCTIONS
=========================
*/

// function myFunction() {
//   alert('Hello nigga');
// }

// myFunction();


/*
==========================
FUNCTION PARAMETERS
=========================
*/


// const myText = "I am a string";
// console.log(myText);

// const newText = myText.replace("string", "sausage");
// console.log(newText);

/*
==========================
OPTIONAL PARAMETERS
=========================
*/

// you don't have to specify them

// const myArray = ['I', 'love', 'my', 'girlfriend'];

// const madeAString = myArray.join(" ");

// console.log(madeAString);

// const madeAnotherString = myArray.join();

// console.log(madeAnotherString);

// // If no parameter is included to specify a joining/delimiting character, a comma is used by default.

/*
==========================
DEFAULT PARAMETERS
=========================
*/

// If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value

// function hello(name = 'Sab') {
//   console.log(`Hello ${name}!`)
// };

// hello('James');
// hello();

/*
==========================
ANONYMOUS FUNCTIONS
=========================
*/

// (function () {
//   alert("hello");
// });

/*
==========================
FUNCTIONS RETURN VALUES
=========================
*/

// function squared(num) {
//   return num * num;
// }


// console.log(squared(4));

/*
==========================
ARROW FUNCTIONS 
=========================
*/

// 2 arguments
// let addInt = (intA, intB) => intA + intB;

// console.log(addInt(2,4));

// 1 argument
// let double = n => n * 2;

// console.log(double(10));

// Dynamic functions
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert("Hello!") :
//   () => alert("Greetings") ;

// welcome();

// Multiline Arrow Functions

// let sum = (a,b) => {
//   result = a + b;
//   return result;
// }

// alert(sum(1,2));

// Exercise

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert('You agreed.'),
//   () => alert('You cancelled the execution')
// )

/*
==========================
RECURSIVE FUNCTIONS 
=========================
*/

// function countDown(fromNumber) {
//   console.log(fromNumber);  
//       let nextNumber = fromNumber - 1;
//       if (nextNumber > 0) {         // only operates when the number is greater than 0
//         countDown(nextNumber);
//       }
// }
// countDown(3);

// let countDown  = function f(fromNumber) {
//   console.log(fromNumber);

//   let nextNumber = fromNumber - 1
//   if (nextNumber > 0) {
//     f(nextNumber);
//   }
// }

// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(10);

/*
==========================
ASSIGNMENT EXERCISE
=========================
*/

// function add7(num1) {
//   return num1 + 7;
// }

// console.log(add7(10));

// function multiply(intA, intB) {
//   return intA * intB;
// }

// console.log(multiply(2,3));

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(capitalize("he is James Sabio, a Full Stack / AI Engineer"));

function lastLetter(str) {
  let last = str.slice(-1);
  return last;
}

console.log(lastLetter("My wife's name is Elisha Mae Sabio"));