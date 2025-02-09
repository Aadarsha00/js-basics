var set = new Set();
set.add("1");
set.add(1);
set.add(1);
console.log(set);

const array1 = [1, 2, 3, 3, 4, 4, 5];
const array2 = [...new Set(array1)];
console.log(array2);
