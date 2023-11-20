function isNumber(value) {
    return typeof value === "number";
}
var xresult = 42;
if (isNumber(xresult)) {
    // result is now treated as a number
    console.log(xresult + 10);
}
