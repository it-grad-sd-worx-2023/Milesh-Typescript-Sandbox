// Shopping cart object
var shoppingCart = [];
// Function to add an item to the shopping cart
function addItem(name, price, quantity) {
    var newItem = { name: name, price: price, quantity: quantity };
    shoppingCart.push(newItem);
    console.log("".concat(quantity, " ").concat(name, "(s) added to the cart."));
}
// Function to remove an item from the shopping cart
function removeItem(name) {
    var index = shoppingCart.findIndex(function (item) { return item.name === name; });
    if (index !== -1) {
        var removedItem = shoppingCart.splice(index, 1)[0];
        console.log("".concat(removedItem.quantity, " ").concat(removedItem.name, "(s) removed from the cart."));
    }
    else {
        console.error("".concat(name, " not found in the cart."));
    }
}
// Function to calculate the total cost of items in the shopping cart
function calculateTotal() {
    return shoppingCart.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
}
// Function to simulate the checkout process
function checkout() {
    var total = calculateTotal();
    console.log("Checkout complete. Total amount: $".concat(total));
    // Reset the shopping cart after checkout
    shoppingCart.length = 0;
}
// Adding items to the cart
addItem("Laptop", 1000, 2);
addItem("Mouse", 20, 3);
addItem("Headphones", 50, 1);
// Removing an item from the cart
removeItem("Mouse");
// Displaying the total and checking out
console.log("Total in the cart: $" + calculateTotal());
checkout();
