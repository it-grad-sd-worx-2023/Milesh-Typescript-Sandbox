var user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
};
var user2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'Jane@example.com',
    age: 25
};
function getFullName(person) {
    if (person.age) {
        return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.email, " ").concat(person.age);
    }
    return "".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.email);
}
var james = {
    firstName: "James",
    lastName: "chocolate",
    email: "james@gmail.com",
    //age: 24
};
console.log(getFullName(james));
var mail = /** @class */ (function () {
    function mail() {
    }
    mail.prototype.later = function (email, after) {
        console.log("send email to ".concat(email, " in ").concat(after, " ms."));
        return true;
    };
    mail.prototype.send = function (email) {
        console.log("send email to ".concat(email, "."));
        return true;
    };
    mail.prototype.queue = function (email) {
        console.log("Queue an email to ".concat(email, "."));
        return true;
    };
    return mail;
}());
