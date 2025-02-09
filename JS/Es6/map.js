const person = {
  name: "John",
  age: 20,
};
var map = new Map();
map.set("name", "jhon");
map.set("age", 10);
map.set(person, "Map with object key");
console.log(map.get(person));
