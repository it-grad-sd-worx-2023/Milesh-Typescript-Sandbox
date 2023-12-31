// Define the User interface with name, age, and occupation properties
interface User {
    name: string;
    age: number;
    occupation: string;
}

// Define the Admin interface with name, age, and role properties
interface Admin {
    name: string;
    age: number;
    role: string;
}

// Define the Person type as a union of User and Admin
export type Person = User | Admin;

// Array of Person objects
export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

// Function to log information about a person (User or Admin)
export function logPerson(person: Person) {
    // Log person's name and age
    console.log(` - ${person.name}, ${person.age}`);

    // Use type assertion to check if the person is an Admin and log the role if applicable
    if ((person as Admin).role) {
        console.log(`   (Admin) Role: ${(person as Admin).role}`);
    }
}

// Output header
console.log('Persons:');

// Loop through each person and log their information
persons.forEach(logPerson);
