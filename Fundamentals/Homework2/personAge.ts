
function calculateAge(birthYear: number): number {
    // Get the current year
    const currentYear: number = new Date().getFullYear();
    
    // Calculate the age
    const age: number = currentYear - birthYear;

    // Return the calculated age
    return age;
}

//  usage:
const birthYear: number = 1999;
const personAge: number = calculateAge(birthYear);
console.log(`The person's age is ${personAge} years.You got this be patient.`);
