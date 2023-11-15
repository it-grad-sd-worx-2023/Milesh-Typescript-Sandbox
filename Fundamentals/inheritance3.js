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
// Base class representing an animal
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to describe the basic information about the animal
    Animal.prototype.describe = function () {
        return "This is ".concat(this.name, ", and it is ").concat(this.age, " years old.");
    };
    return Animal;
}());
// Derived class representing a specific type of animal: Dog
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    // Method to describe additional information about the dog
    Dog.prototype.describeBreed = function () {
        return "It is a ".concat(this.breed, " dog.");
    };
    return Dog;
}(Animal));
// Derived class representing another specific type of animal: Cat
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, color) {
        var _this = _super.call(this, name, age) || this;
        _this.color = color;
        return _this;
    }
    // Method to describe additional information about the cat
    Cat.prototype.describeColor = function () {
        return "It has a ".concat(this.color, " fur color.");
    };
    return Cat;
}(Animal));
// Creating instances of the derived classes
var goldenRetriever = new Dog('Buddy', 3, 'Golden Retriever');
var siameseCat = new Cat('Whiskers', 2, 'Siamese');
// Logging descriptions
console.log(goldenRetriever.describe());
console.log(goldenRetriever.describeBreed());
console.log(siameseCat.describe());
console.log(siameseCat.describeColor());
