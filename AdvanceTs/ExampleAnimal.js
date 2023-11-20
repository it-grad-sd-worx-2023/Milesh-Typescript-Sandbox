var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("MEOW!");
    };
    return Cat;
}());
function animalMakeSound(pet) {
    if (pet instanceof Dog) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
var myDog = new Dog();
var myCat = new Cat();
animalMakeSound(myCat);
animalMakeSound(myDog);
