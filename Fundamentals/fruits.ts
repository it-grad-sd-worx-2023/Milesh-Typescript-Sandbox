// Create an array of strings with a list of fruits


const fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Kiwi"];

// Reverse the order of elements in the array
const reversedFruits: string[] = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

// Print the reversed array to the console
console.log("Reversed Array of Fruits:", reversedFruits);



