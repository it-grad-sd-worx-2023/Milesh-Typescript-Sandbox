// Define the User type with name, age, and occupation properties
export type User = {
    name: string;
    age: number;
    occupation: string;
};

// Array of User objects
export const users: User[] = [
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
export function logPerson(user: User) {
    // Log user's name and age
    console.log(` - ${user.name}, ${user.age}`);
}

// Output header
console.log('Users:');

// Loop through each user and log their information
users.forEach(logPerson);
