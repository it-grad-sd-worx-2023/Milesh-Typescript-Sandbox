"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
// Array of User objects
exports.users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
// Function to log information about a user
function logPerson(user) {
    // Log user's name and age
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
// Output header
console.log('Users:');
// Loop through each user and log their information
exports.users.forEach(logPerson);
