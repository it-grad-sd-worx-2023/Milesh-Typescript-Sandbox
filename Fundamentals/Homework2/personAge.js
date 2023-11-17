function calculateAge(birthYear) {
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Calculate the age
    var age = currentYear - birthYear;
    // Return the calculated age
    return age;
}
//  usage:
var birthYear = 1999;
var personAge = calculateAge(birthYear);
console.log("The person's age is ".concat(personAge, " years.You got this be patient."));
