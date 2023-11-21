// Question 2: Given the Vehicle class below, create two child classes (car and bicycle) that extend the Vehicle class. The car class should implement a "getMileage" method that logs the current mileage to the console. The bicycle class should implement a "getBatteryLevel" method that logs the current battery level to the console.
class Vehicle {
    constructor(public make: string, public model: string) {}
  
    start(): void {
      console.log(`${this.make} ${this.model} is starting.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make: string, model: string, private mileage: number) {
      super(make, model);
    }
  
    getMileage(): void {
      console.log(
        `The mileage of the ${this.make} ${this.model} is ${this.mileage}.`
      );
    }
  }
  
  class Bicycle extends Vehicle {
    constructor(make: string, model: string, private batteryLevel: number) {
      super(make, model);
    }
  
    getBatteryLevel(): void {
      console.log(
        `The battery level of the ${this.make} ${this.model} is ${this.batteryLevel}.`
      );
    }
  }
  
  const car = new Car("Range Rover", "Velar", 36781);
  car.getMileage();
  
  const bicycle = new Bicycle("Optimus", "Prime", 420);
  bicycle.getBatteryLevel();