class Area {
    getArea() { }
}

class Square extends Area {
    constructor(public name: string, public height: number, public width: number) {
        super();
        this.name = name;
        this.height = height;
        this.width = width;
    }
    getArea(): void {
        console.log(`${this.name} Area = ` + this.height * this.width)
    }
}

class Triangle extends Area {
    constructor(public name: string, public base: number, public width: number) {
        super();
        this.name = name;
        this.base = base;
        this.width = width;
    }
    getArea(): void {
        console.log(`${this.name} Area = ` + 0.5 * this.base * this.width)
    }
}
const squareArea = new Square('Square', 5, 6);
squareArea.getArea()

const triangleArea = new Triangle('Triangle', 5, 6);
triangleArea.getArea()