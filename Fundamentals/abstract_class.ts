abstract class TheEmployee {
    constructor(private first_name: string, private last_name: string) {
    }

    abstract getSalary(): number;

    get fullName(): string {
        return `${this.first_name} ${this.last_name}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes a salary of ${this.getSalary()} per month.`;
    }
}

class FullTimeEmployee extends TheEmployee {
    private salary: number;

    constructor(first_name: string, last_name: string, privateSalary: number) {
        super(first_name, last_name);
        this.salary = privateSalary;
    }

    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends TheEmployee {
    private rate: number;
    private hours: number;

    constructor(first_name: string, last_name: string, rate: number, hours: number) {
        super(first_name, last_name);
        this.rate = rate;
        this.hours = hours;
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

// Example usage
let john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.compensationStatement());

let jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(jane.compensationStatement());