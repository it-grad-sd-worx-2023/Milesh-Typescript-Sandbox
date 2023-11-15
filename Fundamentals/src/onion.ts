// Define a type for an item in the shopping cart
type CartItem = {
    name: string;
    price: number;
    quantity: number;
};

// Shopping cart object
const shoppingCart: CartItem[] = [];

// Function to add an item to the shopping cart
function addItem(name: string, price: number, quantity: number): void {
    const newItem: CartItem = { name, price, quantity };
    shoppingCart.push(newItem);
    console.log(`${quantity} ${name}(s) added to the cart.`);
}

// Function to remove an item from the shopping cart
function removeItem(name: string): void {
    const index = shoppingCart.findIndex(item => item.name === name);
    if (index !== -1) {
        const removedItem = shoppingCart.splice(index, 1)[0];
        console.log(`${removedItem.quantity} ${removedItem.name}(s) removed from the cart.`);
    } else {
        console.error(`${name} not found in the cart.`);
    }
}

// Function to calculate the total cost of items in the shopping cart
function calculateTotal(): number {
    return shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to simulate the checkout process
function checkout(): void {
    const total = calculateTotal();
    console.log(`Checkout complete. Total amount: $${total}`);
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
