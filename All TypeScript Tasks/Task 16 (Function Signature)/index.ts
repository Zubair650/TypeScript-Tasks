let userDisplay1: () => void;
let userDisplay2: (userName: string) => void;
let userDisplay3: (userName: string, age: number) => string;

userDisplay1 = () => {
    console.log('Zubair Ahmed is 25 years old');
}
userDisplay2 = (userName: string) => {
    console.log(`${userName} is 25 years old`);
}
userDisplay3 = (userName: string, age: number) => {
    return `${userName} is ${age} years old`;
}
userDisplay1();
userDisplay2('Saad');
console.log(userDisplay3('Asif', 26));
