class StaticType {
    public static count: number = 0;
    constructor() { }
    get Increment() {
        StaticType.count = StaticType.count + 1;
        return StaticType.count;
    }
}

const staticalType = new StaticType()
console.log(staticalType.Increment);

const staticalType2 = new StaticType()
console.log(staticalType2.Increment);
