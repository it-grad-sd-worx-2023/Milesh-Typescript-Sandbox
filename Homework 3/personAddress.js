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
// Question 1: Create a TypeScript class called PersonAddress with properties for street, city, and country. Implement a method getFullAddress() that returns the full address as a string.
var PersonAddress = /** @class */ (function () {
    function PersonAddress(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
    PersonAddress.prototype.getFullAddress = function () {
        return "".concat(this.street, ", ").concat(this.city, ", ").concat(this.country);
    };
    return PersonAddress;
}());
var personAddress = new PersonAddress("Lor pied Coco", "Royale Road Jamaica", "La France");
console.log(personAddress.getFullAddress());
// Question 2: Given the Vehicle class below, create two child classes (car and bicycle) that extend the Vehicle class. The car class should implement a "getMileage" method that logs the current mileage to the console. The bicycle class should implement a "getBatteryLevel" method that logs the current battery level to the console.
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.start = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is starting."));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, mileage) {
        var _this = _super.call(this, make, model) || this;
        _this.mileage = mileage;
        return _this;
    }
    Car.prototype.getMileage = function () {
        console.log("The mileage of the ".concat(this.make, " ").concat(this.model, " is ").concat(this.mileage, "."));
    };
    return Car;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(make, model, batteryLevel) {
        var _this = _super.call(this, make, model) || this;
        _this.batteryLevel = batteryLevel;
        return _this;
    }
    Bicycle.prototype.getBatteryLevel = function () {
        console.log("The battery level of the ".concat(this.make, " ").concat(this.model, " is ").concat(this.batteryLevel, "."));
    };
    return Bicycle;
}(Vehicle));
var car = new Car("Range Rover", "Velar", 36781);
car.getMileage();
var bicycle = new Bicycle("Money", "Optimus", 420);
bicycle.getBatteryLevel();
