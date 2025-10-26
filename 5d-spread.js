// spread operator (...) = allows an iterable such as an array or string to be expanded into separate elements (unpacks the elements)

const numbers = [1,2,3,4,5];

const highest = Math.max(...numbers);

// console.log(highest);

let name = 'James';
let letters = [...name].join("-");
console.log(letters);

const fruits = ['orange', 'apple', 'mango'];

const vegetables = ['carrots', 'celery', 'potatoes'];
const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables);
