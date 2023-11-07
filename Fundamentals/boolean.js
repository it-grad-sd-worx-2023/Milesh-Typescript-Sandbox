var pending = true;
var notPending = !pending;
var and = pending && notPending;
var or = pending || notPending;
console.log(and);
console.log(or);
