//?scope
//var has global scope whereas let and const have block scope

//?functionScope

// const helloWorld = () => {
//   var x = 1;
//   let y = 2;
//   const z = 3;
//   console.log(x, y, z);
// };
// helloWorld();
// console.log("function scope var", x); //exception case for var where it act like let const

//?lexical scope
// a child can access the parent's function but a parent cant access the child's

const lexicalScope = () => {
  const x = "outer";

  const inner = () => {
    const y = "inner";
    console.log(x);
  };
  inner();
};
lexicalScope();
