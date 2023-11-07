"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    User.prototype.display = function () {
        console.log("User Name: ".concat(this.userName, " & User Id: ").concat(this.userId));
    };
    return User;
}());
var u1 = new User('Zubair', 15);
u1.display();
var u2 = new User('Asif', 16);
u2.display();
