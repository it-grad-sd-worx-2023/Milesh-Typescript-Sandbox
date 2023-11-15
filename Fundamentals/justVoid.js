// Function to add two numbers
function add(a, b) {
    console.log("Result of ".concat(a, " + ").concat(b, " is ").concat(a + b));
}
// Function to subtract two numbers
function subtract(a, b) {
    console.log("Result of ".concat(a, " - ").concat(b, " is ").concat(a - b));
}
// Function to multiply two numbers
function multiply(a, b) {
    console.log("Result of ".concat(a, " * ").concat(b, " is ").concat(a * b));
}
// Function to divide two numbers
function divide(a, b) {
    if (b !== 0) {
        console.log("Result of ".concat(a, " / ").concat(b, " is ").concat(a / b));
    }
    else {
        console.error("Cannot divide by zero!");
    }
}
// Call the calculator functions
add(5, 3);
subtract(8, 4);
multiply(2, 6);
divide(10, 2);
divide(8, 0); // Attempt to divide by zero
// Output:
// Result of 5 + 3 is 8
// Result of 8 - 4 is 4
// Result of 2 * 6 is 12
// Result of 10 / 2 is 5
// Cannot divide by zero!
