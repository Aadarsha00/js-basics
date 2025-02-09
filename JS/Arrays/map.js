// const num = [0, 1, 2, 3];

// const newArr = num.map((e, i) => {
//   return e * 2;
// });
// console.log(newArr);

//?for each doesn't return new array where as map does

// const newArr = num.filter((e, i) => {
//   return i !== 2;
// });
// console.log(num);
// console.log(newArr);

const numbers = [100, 12, 23, 56, 1, 33];
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

const person = [
  {
    name: "Shyam",
    age: 21,
    isStudent: true,
  },

  {
    name: "Ram",
    age: 20,
    isStudent: false,
  },
];
//?doesn't work on string
console.log(person.sort((a, b) => a.age - b.age));
console.log(
  person.sort((a, b) => a.name.localeCompare(b.name) || a.age - b.age)
);
