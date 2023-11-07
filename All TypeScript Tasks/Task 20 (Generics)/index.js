// Generics are code templates that we can define and reuse throughout our codebase.
var userInfo = function (u) {
    console.log(u);
};
var u1 = 'Zubair';
var u2 = 105;
var u3 = true;
var u4 = { age: 25 };
var u5 = ['asif', 'nasif', 'rasif'];
userInfo(u1);
userInfo(u2);
userInfo(u3);
userInfo(u4);
userInfo(u5);
