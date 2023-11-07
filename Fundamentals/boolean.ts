let pending: boolean = true;
let notPending = !pending;

let and = pending && notPending;
let or = pending || notPending;
console.log(and);
console.log(or);