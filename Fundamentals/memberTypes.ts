class Person {
    getName(): any {
        throw new Error("Method not implemented.");
    }
    name:string;
    age: number;
    city: boolean;
    address: string;
}

const person = new Person();
person.name = "hello";
person.age = 10;
person.city = true;
person.address = "Port Louis";
console.log(person);
