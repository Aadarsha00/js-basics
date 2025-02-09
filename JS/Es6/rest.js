//...
//?if ...is in the left side it is rest operator and if it is in right side it is spread operator
function add(...number) {
  let sum = 0;
  sum = number.reduce((acc, val) => {
    acc += val;
    return acc;
  }, 0);
  console.log(sum);
}
add(1, 2, 3);
