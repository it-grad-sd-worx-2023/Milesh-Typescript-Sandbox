var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
var cat = new Animal("Cat");
cat.makeSound();
