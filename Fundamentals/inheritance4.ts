// Base class representing a vehicle
class Vehicle {
    private make: string;
    private model: string;
    private year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to describe the basic information about the vehicle
    describe(): string {
        return `This is a ${this.year} ${this.make} ${this.model}.`;
    }
}

// Derived class representing a specific type of vehicle: Car
class Car extends Vehicle {
    private numDoors: number;

    constructor(make: string, model: string, year: number, numDoors: number) {
        super(make, model, year); // Call the constructor of the base class
        this.numDoors = numDoors;
    }

    // Method to describe additional information about the car
    describeDoors(): string {
        return `It is a ${this.numDoors}-door car.`;
    }
}

// Derived class representing another specific type of vehicle: Motorcycle
class Motorcycle extends Vehicle {
    private hasFairing: boolean;

    constructor(make: string, model: string, year: number, hasFairing: boolean) {
        super(make, model, year); // Call the constructor of the base class
        this.hasFairing = hasFairing;
    }

    // Method to describe additional information about the motorcycle
    describeFairing(): string {
        return this.hasFairing ? "It has a fairing." : "It does not have a fairing.";
    }
}

// Creating instances of the derived classes
let sedan = new Car('Toyota', 'Camry', 2022, 4);
let sportBike = new Motorcycle('Honda', 'CBR600RR', 2023, true);

// Logging descriptions
console.log(sedan.describe());
console.log(sedan.describeDoors());

console.log(sportBike.describe());
console.log(sportBike.describeFairing());
