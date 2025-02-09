function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person1 = new Person("john", 20);
console.log(person1.name);
console.log(person1.__proto__ === Person.prototype);
