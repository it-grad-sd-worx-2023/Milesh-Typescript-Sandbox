function add(a, b) {
    a = 10;
    b = 20;
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    a = "hello";
    b = 'test';
    if (typeof a === 'string' && typeof b === 'string') {
        return "".concat(a, " ").concat(b);
    }
    throw new Error('parameters must be number or string');
}
var result;
result = 10;
result = 'hi';
result = false;
console.log(result);
var input;
input = 100;
input = "hello from mauritius";
input = false;
console.log(input);
