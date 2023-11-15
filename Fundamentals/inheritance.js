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
var Mainperson = /** @class */ (function () {
    function Mainperson(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Mainperson.prototype.describe = function () {
        return "This is ".concat(this.first_name, " ").concat(this.last_name);
    };
    return Mainperson;
}());
// This is a class definition named Mainperson.
// It has a constructor that takes two parameters (first_name and last_name) and assigns them to private properties with the same names.
// It has a method called describe that returns a string describing the person with their first and last names.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(first_name, last_name, jobTitle) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(Mainperson));
// This is another class definition named Employee that extends (inherits from) the Mainperson class.
// It has a constructor that takes three parameters (first_name, last_name, and jobTitle). It calls the constructor of the Mainperson class using super(first_name, last_name).
// The jobTitle parameter is marked as private, meaning it can only be accessed within the Employee class
var employee = new Employee('Milesh', 'Taukoorah', 'Web developer');
// This line creates a new instance of the Employee class with the provided values for first_name, last_name, and jobTitle.
console.log(employee.describe());
// This line logs the result of calling the describe method on the employee instance. The describe method is inherited from the Mainperson class.
