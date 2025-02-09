const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 90 },
];
// Add a New Student (Functions)

// Write a function addStudent(name, grade) that:
// Takes the student's name and grade as inputs.
// Adds a new student object to the students array.
// Logs: "Student [name] has been added."
// Find a Student (Functions and Loops)

// Write a function findStudent(name) that:
// Loops through the students array to find a student by their name.
// If found, logs: "Student [name] has a grade of [grade]."
// If not found, logs: "Student [name] was not found."
// Calculate Average Grade (Loops)

// Write a function calculateAverage() that:
// Calculates and logs the average grade of all students in the array.

function addStudent(name, grade) {
  students.push({ name, grade });
  console.log(`Student ${name} has been added`);
}

function findStudent(name) {
  for (let student of students) {
    console.log(
      student.name === name
        ? `Student ${name} has a grade of ${grade}`
        : `Student ${name} was not found`
    );
  }
}
addStudent("aadarsha", 97);
findStudent("aadarsha");
