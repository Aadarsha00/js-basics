// Write a function checkNumber that takes a number as input and returns:

// "Positive" if the number is greater than 0.

// "Negative" if the number is less than 0.

// "Zero" if the number is 0.

// const checkNumber = (num) => {
//   return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// };
// const result = checkNumber(-2);
// console.log(result);

// Write a function calculateArea that takes the length and width of a rectangle as arguments and returns its area. If only one argument is provided, assume it’s a square and calculate the area accordingly.

const calculateArea = (l, w = l) => {
  return l * w;
};
const result = calculateArea(7);
console.log(result);
