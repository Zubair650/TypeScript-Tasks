export { }

abstract class User {
    userName: string;
    userId: number;

    constructor(userName: string, userId: number) {
        this.userName = userName;
        this.userId = userId;
    }
    abstract display(): void;
}

class childUser extends User {
    age: number;
    constructor(userName: string, userId: number, age: number) {
        super(userName, userId)
        this.age = age;
    }
    display(): void {
        console.log(`User Name: ${this.userName}, User Id: ${this.userId} & User age: ${this.age}`)
    }
}

let u1 = new childUser('Asif', 16, 24);
u1.display();