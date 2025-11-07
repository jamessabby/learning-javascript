// Write a function that loops through an array and filters numbers by a condition

// const numbers = [2, 4, 15, 18, 3, 34, 10, 3];

// function greaterThanTen(array) {

//   let newArr = [];
//   array.forEach((element) => {
//     if (element > 10) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }

// console.log(greaterThanTen(numbers));

// Reverse a string and check if it’s a palindrome

// function isPalindrome(str) {
//   let word = [];
//   word.push(...str);
//   const reversedWord = word.reverse().join("");
//   return reversedWord === str;
// }

// console.log(isPalindrome("racecar"));

// Use objects and access nested properties

// const person1 = {
//   name: "James",
//   age: 18,
//   job: "Software Engineer",
//   school: "DLSUD",
//   accomplishments: {
//     jhs: "With High Honors",
//     shs: "With High Honors",
//     college: "hahaha",
//   },
// };

// console.log(person1.accomplishments.college);

// Use map, filter, and reduce on an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mappedArr = arr.map((num) => {
  return num * 2;
});

console.log(mappedArr);

const reducedArr = arr.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(reducedArr);

const filteredArr = arr.filter((num) => {
  return num < 5;
});

console.log(filteredArr);
