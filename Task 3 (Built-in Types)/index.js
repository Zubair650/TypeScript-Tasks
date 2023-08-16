"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstName;
var lastName;
var fullName;
var age;
firstName = 'Zubair';
lastName = 'Ahmed';
fullName = firstName.concat(" " + lastName);
age = 25;
console.log("My name is ".concat(fullName, ". My age is ").concat(age));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
// We can't use --> console.log(age.toUpperCase())
