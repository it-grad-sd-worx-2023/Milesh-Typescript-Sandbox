// defining the constructio with the personAddress object
var PersonAddress = /** @class */ (function () {
    function PersonAddress(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
    PersonAddress.prototype.getFullAddress = function () {
        return "".concat(this.street, ", ").concat(this.city, ", ").concat(this.country);
    };
    return PersonAddress;
}());
var personAddress = new PersonAddress("Lor pied Coco", "Royale Road Jamaica", "La France");
console.log(personAddress.getFullAddress());
