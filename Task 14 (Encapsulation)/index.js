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
    function User(userName) {
        this.userName = userName;
    }
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName) {
        return _super.call(this, userName) || this;
    }
    Student.prototype.display = function () {
        console.log("User Name: ".concat(this.userName, ", User Id: ").concat(this.userId));
    };
    Student.prototype.setStudent = function (userName, userId) {
        this.userName = userName;
        this.userId = userId;
    };
    Student.prototype.getStudentId = function () {
        return this.userId;
    };
    return Student;
}(User));
var u1 = new Student('Zubair');
u1.setStudent('Saad', 150);
console.log("The user id: ".concat(u1.getStudentId(), " and user name: ").concat(u1.userName));
