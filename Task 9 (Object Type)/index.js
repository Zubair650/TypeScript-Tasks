"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users;
users = [];
var user1;
user1 = { userName: 'Zubair', userId: 101 };
var user2;
user2 = { userName: 'Asif', userId: 102 };
users.push(user1);
users.push(user2);
for (var key in users) {
    console.log("Name: ".concat(users[key]["userName"], ", ID: ").concat(users[key]["userId"]));
}
