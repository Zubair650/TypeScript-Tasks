export { };

type User = { userName: string, userId: number };
let users: User[];
users = [];

let user1: User;
user1 = { userName: 'Zubair', userId: 101 };

let user2: User;
user2 = { userName: 'Asif', userId: 102 };

users.push(user1);
users.push(user2);

for (const key in users) {
    console.log(`Name: ${users[key]["userName"]}, ID: ${users[key]["userId"]}`);
}