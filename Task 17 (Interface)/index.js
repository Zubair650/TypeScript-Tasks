var users = [];
var user1 = {
    id: 12,
    name: 'zubair'
};
var user2 = {
    id: 13,
    name: 'saad'
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("User name: ".concat(user.name, ", id: ").concat(user.id));
};
users.forEach(function (u) { return printUserInfo(u); });
