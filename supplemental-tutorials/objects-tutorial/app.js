const person1 = {
  firstName: "james",
  lastName: "sabio",
  age: 19,
  school: "De La Salle University - Dasmarinas",
  isCoding: () => {console.log("James is coding!")}
}

const person2 = {
  firstName: "michael",
  lastName: "serdon",
  age: 19,
  school: "Cavite State University - Indang",
  sayHello: function(){console.log("Hi I am Michael")}
}

// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.school);
// console.log();

// console.log(person2);
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.school);
person1.isCoding();
person2.sayHello();

