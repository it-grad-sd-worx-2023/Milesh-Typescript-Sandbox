var Serson = /** @class */ (function () {
    function Serson(name) {
        this.name = name;
    }
    Serson.prototype.getName = function () {
        return this.name;
    };
    return Serson;
}());
var serson = new Serson("Milesh");
console.log(serson.getName()); // person.name isn't accessible from outside the class since it's private
