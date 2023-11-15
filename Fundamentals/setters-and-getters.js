var newPerson = /** @class */ (function () {
    function newPerson() {
    }
    Object.defineProperty(newPerson.prototype, "age", {
        get: function () {
            return this.age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 100) {
                throw new console.error("Invalid Age!");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newPerson.prototype, "fullName", {
        get: function () {
            return "".concat(this.first_name, " ").concat(this.last_name);
        },
        enumerable: false,
        configurable: true
    });
    return newPerson;
}());
var thirdPerson = new newPerson();
thirdPerson.age = 23;
// console.log(thirdPerson.age);
var inputage = 20;
thirdPerson.age = inputage;
if (inputage > 0 && inputage < 100) {
    thirdPerson.age = inputage;
}
thirdPerson.first_name = "Milesh";
thirdPerson.last_name = 'Taukoorah';
console.log(thirdPerson.fullName);
