// Function to perform addition
function add(a, b) {
    return a + b;
}
// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}
// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}
// Function to perform division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        console.error("Cannot divide by zero!");
        return NaN; // Not a Number
    }
}
// Using the calculator functions
console.log("Addition: " + add(10, 5));
console.log("Subtraction: " + subtract(10, 5));
console.log("Multiplication: " + multiply(10, 5));
console.log("Division: " + divide(10, 5));
// Function to calculate the square of a number
function square(number) {
    return multiply(number, number);
}
// Using the square function
console.log("Square of 4: " + square(4));
