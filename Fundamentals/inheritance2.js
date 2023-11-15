var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class representing a shape
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    // Method to describe the shape
    Shape.prototype.describe = function () {
        return "This is a ".concat(this.color, " shape.");
    };
    return Shape;
}());
// Derived class representing a specific type of shape: Circle
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    // Method to calculate and describe the area of the circle
    Circle.prototype.describeArea = function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        return "This circle has a radius of ".concat(this.radius, " and an area of ").concat(area.toFixed(2), ".");
    };
    return Circle;
}(Shape));
// Derived class representing another specific type of shape: Square
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, sideLength) {
        var _this = _super.call(this, color) || this;
        _this.sideLength = sideLength;
        return _this;
    }
    // Method to calculate and describe the area of the square
    Square.prototype.describeArea = function () {
        var area = Math.pow(this.sideLength, 2);
        return "This square has a side length of ".concat(this.sideLength, " and an area of ").concat(area, ".");
    };
    return Square;
}(Shape));
// Creating instances of the derived classes
var redCircle = new Circle('red', 5);
var blueSquare = new Square('blue', 4);
// Logging descriptions
console.log(redCircle.describe());
console.log(redCircle.describeArea());
console.log(blueSquare.describe());
console.log(blueSquare.describeArea());
