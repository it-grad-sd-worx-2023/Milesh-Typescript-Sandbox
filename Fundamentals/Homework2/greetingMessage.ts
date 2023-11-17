//declaring function 
function generateGreeting(name: string): string {
    // Create the greeting message
    const greeting: string = `Hello, ${name}! Welcome, Hope you are doing well! Its been a long time..`;

    // Return the greeting message
    return greeting;
}

// Example usage:
const personName: string = "Milesh Taukoorah";
const greetingMessage: string = generateGreeting(personName);
console.log(greetingMessage);
