//declaring function 
function generateGreeting(name) {
    // Create the greeting message
    var greeting = "Hello, ".concat(name, "! Welcome, Hope you are doing well! Its been a long time..");
    // Return the greeting message
    return greeting;
}
// Example usage:
var personName = "Milesh Taukoorah";
var greetingMessage = generateGreeting(personName);
console.log(greetingMessage);
