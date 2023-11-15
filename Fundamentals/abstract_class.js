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
var TheEmployee = /** @class */ (function () {
    function TheEmployee(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Object.defineProperty(TheEmployee.prototype, "fullName", {
        get: function () {
            return "".concat(this.first_name, " ").concat(this.last_name);
        },
        enumerable: false,
        configurable: true
    });
    TheEmployee.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes a salary of ").concat(this.getSalary(), " per month.");
    };
    return TheEmployee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(first_name, last_name, privateSalary) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.salary = privateSalary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(TheEmployee));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(first_name, last_name, rate, hours) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return Contractor;
}(TheEmployee));
// Example usage
var john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.compensationStatement());
var jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(jane.compensationStatement());
