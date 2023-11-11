class Parent {
    public role: string;
    constructor(role: string) {
        this.role = role
    }
}

class Student extends Parent {
    public name: string;
    constructor(name: string, role: string) {
        super(role);
        this.name = name;
    }
    makeDisplay() {
        console.log(`My name is ${this.name} and my role is ${this.role}`);
    }
}

const parentInfo = new Parent('Developer');
const myInfo = new Student('Zubair', 'CS Student');
myInfo.makeDisplay();