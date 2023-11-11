class Info {
    constructor(public balance: number) { }
    set Deposit(amount: number) {
        this.balance = amount + this.balance
    }
    get Amount() {
        return this.balance
    }
}
const amountInfo = new Info(16000);
amountInfo.Deposit = 500;
console.log(amountInfo.Amount)