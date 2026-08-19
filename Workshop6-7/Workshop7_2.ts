export {};
class Shape {
    constructor(public color: string) {}
}
class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }
    area(): number {
        return 3.14 * this.radius * this.radius;
    }
}
class Square extends Shape {
    constructor(color: string, public side: number) {
        super(color);
    }
    area(): number {
        return this.side * this.side;
    }
}
const circle1 = new Circle("Green", 7);
console.log(`Circle - Color: ${circle1.color}, Area: ${circle1.area()}`);
const square1 = new Square("Purple", 10);
console.log(`Square - Color: ${square1.color}, Area: ${square1.area()}`);