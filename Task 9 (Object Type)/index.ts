export { };
let users: object[];
users = [];

let user1: { userName: string, userId: number };
user1 = { userName: 'Zubair', userId: 101 };

let user2: { userName: string, userId: number };
user2 = { userName: 'Asif', userId: 102 };

users.push(user1);
users.push(user2);

for (const key in users) {
    console.log(`Name: ${users[key]["userName"]}, ID: ${users[key]["userId"]}`);
}