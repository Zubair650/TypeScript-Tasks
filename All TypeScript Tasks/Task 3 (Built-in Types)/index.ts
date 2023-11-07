export { }
let firstName: string;
let lastName: string;
let fullName: string;
let age: number;

firstName = 'Zubair';
lastName = 'Ahmed';
fullName = firstName.concat(" " + lastName);
age = 25;

console.log(`My name is ${fullName}. My age is ${age}`)
console.log(fullName.split(" "))
console.log(fullName.toUpperCase())

// We can't use --> console.log(age.toUpperCase())
