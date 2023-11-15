// Base class representing a shape
class Shape {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    // Method to describe the shape
    describe(): string {
        return `This is a ${this.color} shape.`;
    }
}

// Derived class representing a specific type of shape: Circle
class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color); // Call the constructor of the base class
        this.radius = radius;
    }

    // Method to calculate and describe the area of the circle
    describeArea(): string {
        const area = Math.PI * Math.pow(this.radius, 2);
        return `This circle has a radius of ${this.radius} and an area of ${area.toFixed(2)}.`;
    }
}

// Derived class representing another specific type of shape: Square
class Square extends Shape {
    private sideLength: number;

    constructor(color: string, sideLength: number) {
        super(color); // Call the constructor of the base class
        this.sideLength = sideLength;
    }

    // Method to calculate and describe the area of the square
    describeArea(): string {
        const area = Math.pow(this.sideLength, 2);
        return `This square has a side length of ${this.sideLength} and an area of ${area}.`;
    }
}

// Creating instances of the derived classes
let redCircle = new Circle('red', 5);
let blueSquare = new Square('blue', 4);

// Logging descriptions
console.log(redCircle.describe());
console.log(redCircle.describeArea());

console.log(blueSquare.describe());
console.log(blueSquare.describeArea());
