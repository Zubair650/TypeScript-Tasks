var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.userName = userName;
        this.age = age;
        this.formatUser = function () {
            return "User name: ".concat(_this.userName, " and age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User('Zubair', 35);
console.log(user.formatUser());
