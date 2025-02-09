// const higherOrder = (callback) => {
//   callback();
// };

// const greet = () => {
//   console.log("Hello");
// };
// higherOrder(greet);

const first = () => {
  return (a, b) => {
    console.log(a + b);
  };
};
const second = first();
second(1, 2);
