export { }
class User {
    userName: string;
    userId: number;

    constructor(userName: string, userId: number) {
        this.userName = userName;
        this.userId = userId;
    }
    display(): void {
        console.log(`User Name: ${this.userName} & User Id: ${this.userId}`)
    }
}

let u1 = new User('Zubair', 15);
u1.display();
let u2 = new User('Asif', 16);
u2.display();



