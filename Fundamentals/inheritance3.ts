// Base class representing an animal
class Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to describe the basic information about the animal
    describe(): string {
        return `This is ${this.name}, and it is ${this.age} years old.`;
    }
}

// Derived class representing a specific type of animal: Dog
class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age); // Call the constructor of the base class
        this.breed = breed;
    }

    // Method to describe additional information about the dog
    describeBreed(): string {
        return `It is a ${this.breed} dog.`;
    }
}

// Derived class representing another specific type of animal: Cat
class Cat extends Animal {
    private color: string;

    constructor(name: string, age: number, color: string) {
        super(name, age); // Call the constructor of the base class
        this.color = color;
    }

    // Method to describe additional information about the cat
    describeColor(): string {
        return `It has a ${this.color} fur color.`;
    }
}

// Creating instances of the derived classes
let goldenRetriever = new Dog('Buddy', 3, 'Golden Retriever');
let siameseCat = new Cat('Whiskers', 2, 'Siamese');

// Logging descriptions
console.log(goldenRetriever.describe());
console.log(goldenRetriever.describeBreed());

console.log(siameseCat.describe());
console.log(siameseCat.describeColor());
