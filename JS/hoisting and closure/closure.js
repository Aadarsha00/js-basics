//?function which is bundeled with its lexical scope
// function outer() {
//   var x = 1;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

//?child function takes reference of its parent variable not its value
// function outer() {
//   var x = 1;
//   function inner() {
//     console.log(x);
//   }
//   x = 100;
//   inner();
// }
// outer();

// function factor(a) {
//   function multi(b) {
//     console.log(a * b);
//   }
//   multi(5);
// }
// factor(4);

//?closure example
// function factor(f) {
//   return function num(n) {
//     console.log(f * n);
//   };
// }
// const double = factor(2);
// double(4);

//?Closure example
function counter() {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(count);
    },
    decrement: () => {
      count--;
      console.log(count);
    },
    getCount: () => {
      console.log(count);
    },
  };
}
const count = counter();
count.increment();
count.decrement();
count.getCount();
