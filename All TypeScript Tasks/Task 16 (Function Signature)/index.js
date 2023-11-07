var userDisplay1;
var userDisplay2;
var userDisplay3;
userDisplay1 = function () {
    console.log('Zubair Ahmed is 25 years old');
};
userDisplay2 = function (userName) {
    console.log("".concat(userName, " is 25 years old"));
};
userDisplay3 = function (userName, age) {
    return "".concat(userName, " is ").concat(age, " years old");
};
userDisplay1();
userDisplay2('Saad');
console.log(userDisplay3('Asif', 26));
