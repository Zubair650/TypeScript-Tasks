export { };

class User {
    public userName: string;
    constructor(userName: string) {
        this.userName = userName;
    }
}

class Student extends User {
    private userId: number;
    constructor(userName: string) {
        super(userName);
    }
    display(): void {
        console.log(`User Name: ${this.userName}, User Id: ${this.userId}`);
    }
    setStudent(userName: string, userId: number): void {
        this.userName = userName;
        this.userId = userId;
    }
    getStudentId(): number {
        return this.userId;
    }
}

let u1 = new Student('Zubair');
u1.setStudent('Saad', 150);
console.log(`The user id: ${u1.getStudentId()} and user name: ${u1.userName}`);