{
    class Encapsulate {
        public name: string;
        private _age: number;
        protected role: string;

        constructor(name: string, _age: number) {
            this.name = name;
            this._age = _age;
        }

        public getName() {
            console.log(this.name);
            console.log(this._age);
        }

    }

    class ChildClass extends Encapsulate {
        constructor(name: string, _age: number) {
            super(name, _age);
        }
    }

    const newInfo = new ChildClass('Zubair', 25)
    newInfo.getName()
    console.log(newInfo.name);
}