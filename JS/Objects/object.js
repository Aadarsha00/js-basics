// const person = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     return `${this.name} is ${this.age} years old`;
//   },
// };
// console.log(person.greet());
// console.log(person.name);
// console.log(person["name"]);

//?should avoid this method
// const person = new Object();
// person.name = "John";
// person.age = "30";
// console.log(person.name);

//? delete keywords delete a object
// delete person.age;
// console.log(person);

//? this make the object unchangeable
// Object.freeze(person);

//?in this method we can only modify the object cant add and delete
// Object.seal(person);

const car = {
  company: "honda",
  model: "civic",
  year: 2002,
  used: function () {
    return `The ${this.company} ${this.model} was made in year ${this.year}`;
  },
};
console.log(car.used());

console.log("company" in car); //checks whether the key exist in object or not
console.log(typeof car); //checks the type of object
console.log(Object.values(car));
console.log(Object.keys(car));
console.log(Object.entries(car));
