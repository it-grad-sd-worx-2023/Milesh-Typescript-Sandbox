function sub(a, b) {
    return b - a;
}
// using sub 
sub(5, 10);
// optional parameter 
// function to greet user 
function greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    console.log("".concat(greeting, ", ").concat(name));
    //calling the function without providing a value for the optional parameter
    greet("Milesh"); // output will be Hello, Milesh
}
//optional parameter
// function multiply(a: number, b : number, c?: number): number {
//     if (typeof c !== 'undefined') {
//         return a * b * c;
//     }
//         return a * b;
// }
// multiply(6,5);
// default parameter
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
applyDiscount(100, 0.10);
// function getTotal
// let players = 'Fabrice', 'Noah';
// function displayTeam(teamName, ...players) {
//     console.log(`Team: ${teamName}`);
//     console.log('Players: ', players.join(', '));
//   }
//   // Example usage
//   displayTeam('Team A', 'John', 'Jane', 'Bob');
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
multiply(6, 5);
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));
