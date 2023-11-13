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
