class person {
  walk() {
    console.log("Person walks");
  }
}
class Jhon extends person {
  speak() {
    console.log("John Speaks");
  }
}
const person1 = new Jhon();
person1.speak();
person1.walk();

//person class as parent and its properties name age address make two child student(roll no class) and teacher(subject department)
