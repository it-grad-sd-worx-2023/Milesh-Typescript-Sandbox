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
// Base class representing a vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to describe the basic information about the vehicle
    Vehicle.prototype.describe = function () {
        return "This is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, ".");
    };
    return Vehicle;
}());
// Derived class representing a specific type of vehicle: Car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numDoors) {
        var _this = _super.call(this, make, model, year) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    // Method to describe additional information about the car
    Car.prototype.describeDoors = function () {
        return "It is a ".concat(this.numDoors, "-door car.");
    };
    return Car;
}(Vehicle));
// Derived class representing another specific type of vehicle: Motorcycle
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, hasFairing) {
        var _this = _super.call(this, make, model, year) || this;
        _this.hasFairing = hasFairing;
        return _this;
    }
    // Method to describe additional information about the motorcycle
    Motorcycle.prototype.describeFairing = function () {
        return this.hasFairing ? "It has a fairing." : "It does not have a fairing.";
    };
    return Motorcycle;
}(Vehicle));
// Creating instances of the derived classes
var sedan = new Car('Toyota', 'Camry', 2022, 4);
var sportBike = new Motorcycle('Honda', 'CBR600RR', 2023, true);
// Logging descriptions
console.log(sedan.describe());
console.log(sedan.describeDoors());
console.log(sportBike.describe());
console.log(sportBike.describeFairing());
