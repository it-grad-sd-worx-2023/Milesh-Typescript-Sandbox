// let numberToCheck = 10;
// function isEven(numberToCheck: number): boolean {
//     const isEven: boolean = numberToCheck % 2 === 0;
//     return isEven;
// }
// console.log(`Is ${numberToCheck} even? ${result}`);
function isEven(numbertoCheck) {
    var isEven = numbertoCheck % 2 === 0;
    return isEven;
}
var numberToCheck = 42;
var result = isEven(numberToCheck);
console.log("is ".concat(numberToCheck, " even? ").concat(result));
// function isEven(numberToCheck: number): boolean {
//     const isEven: boolean = numberToCheck % 2 === 0;
//     return isEven;
// }
// const numberToCheck: number = 42;
// const result: boolean = isEven(numberToCheck);
// console.log(`Is ${numberToCheck} even? ${result}`);
