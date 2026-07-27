"use strict";
let Name = "John";
let Age = 1;
let isStudent = true;
console.log("Data type of Name is" + typeof Name);
console.log("Data type of Age is" + typeof Age);
console.log("Data type of isStudent is" + typeof isStudent);
function displayDetails(name, age, active) {
    console.log(`Student Name: ${name}`);
    console.log(`Students Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}
displayDetails(Name, Age, isStudent);
