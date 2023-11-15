class Mainperson {
    constructor (private first_name: string, private last_name : string){
        this.first_name = first_name;
        this.last_name = last_name;

    }
    
    describe(): string {
        return `This is ${this.first_name} ${this.last_name}`;

    }
}

// This is a class definition named Mainperson.
// It has a constructor that takes two parameters (first_name and last_name) and assigns them to private properties with the same names.
// It has a method called describe that returns a string describing the person with their first and last names.


class Employee extends Mainperson {
    constructor (first_name : string , last_name : string , private jobTitle : string){
        super(first_name,last_name);
    }
}

// This is another class definition named Employee that extends (inherits from) the Mainperson class.
// It has a constructor that takes three parameters (first_name, last_name, and jobTitle). It calls the constructor of the Mainperson class using super(first_name, last_name).
// The jobTitle parameter is marked as private, meaning it can only be accessed within the Employee class
let employee = new Employee('Milesh','Taukoorah','Web developer');
// This line creates a new instance of the Employee class with the provided values for first_name, last_name, and jobTitle.


console.log(employee.describe());

// This line logs the result of calling the describe method on the employee instance. The describe method is inherited from the Mainperson class.
