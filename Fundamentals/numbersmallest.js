//initialize the number array 
var numbers = [8, 3, 12, 5, 1, 7, 9];
// Find the smallest number without using built-in functions
var smallestNumber = numbers[0]; // Assume the first element is the smallest initially
// Iterate through the array to find the smallest number
for (var i = 1; i < numbers.length; i++) {
    // Compare the current element with the smallestNumber
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
    }
}
// Print the smallest number to the console
console.log("The smallest number is:", smallestNumber);
