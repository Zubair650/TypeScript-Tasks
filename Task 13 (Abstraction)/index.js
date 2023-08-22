"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    return User;
}());
var childUser = /** @class */ (function (_super) {
    __extends(childUser, _super);
    function childUser(userName, userId, age) {
        var _this = _super.call(this, userName, userId) || this;
        _this.age = age;
        return _this;
    }
    childUser.prototype.display = function () {
        console.log("User Name: ".concat(this.userName, ", User Id: ").concat(this.userId, " & User age: ").concat(this.age));
    };
    return childUser;
}(User));
var u1 = new childUser('Asif', 16, 24);
u1.display();
