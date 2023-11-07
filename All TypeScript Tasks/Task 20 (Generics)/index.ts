// Generics are code templates that we can define and reuse throughout our codebase.

const userInfo = <X>(u: X) => {
    console.log(u)
}
const u1 = 'Zubair';
const u2 = 105;
const u3 = true;
const u4 = { age: 25 };
const u5 = ['asif', 'nasif', 'rasif'];
userInfo(u1);
userInfo(u2);
userInfo(u3);
userInfo(u4);
userInfo(u5);

