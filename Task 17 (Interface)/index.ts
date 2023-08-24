interface iUser {
    id: number,
    name: string
}

let users: iUser[] = []

let user1: iUser = {
    id: 12,
    name: 'zubair'
}
let user2: iUser = {
    id: 13,
    name: 'saad'
}

users.push(user1);
users.push(user2);

const printUserInfo = (user: iUser) => {
    console.log(`User name: ${user.name}, id: ${user.id}`);
}
users.forEach(u => printUserInfo(u));