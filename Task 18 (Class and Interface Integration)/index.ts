interface iUserFormatter {
    formatUser: () => string;
}
class User implements iUserFormatter {
    constructor(private userName: string, private age: number) { }
    formatUser = () => {
        return `User name: ${this.userName} and age: ${this.age}`
    }
}

let user = new User('Zubair', 35);
console.log(user.formatUser());