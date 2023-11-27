"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
// Array of Person objects
exports.persons = [
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
function logPerson(person) {
    // Log person's name and age
    console.log(" - ".concat(person.name, ", ").concat(person.age));
    // Use type assertion to check if the person is an Admin and log the role if applicable
    if (person.role) {
        console.log("   (Admin) Role: ".concat(person.role));
    }
}
exports.logPerson = logPerson;
// Output header
console.log('Persons:');
// Loop through each person and log their information
exports.persons.forEach(logPerson);
