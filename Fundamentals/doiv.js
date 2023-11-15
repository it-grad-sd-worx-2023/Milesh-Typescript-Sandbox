function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
console.log(Animal);
