//  if statement


let num : number = 10

if(num > 0) {
    console.log("The number is positive.");
} else if  ( num < 0) {
    console.log("The number is negative")
} else {
    console.log("The number is zero.")
}


// switch statement
 let day : string = 'Monday';

 switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    
    case "Friday":
        console.log("It's almost the weekend!");
        break;

    default:
        console.log("It's a regular day.")
 }

 // for loop

 for(let i = 1; i <= 5; i++){
    console.log(`Iteratiion ${i}`)
 }




//  while loop

let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`)
    count++
}



// do while loop

let x = 0;

do {
  console.log(`x: ${x}`);
  x++;
} while (x < 3);


// for... in Loop (iterating over object Properties)

let person = { name : 'Milesh', age: 55, job: "Developer"};

for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}

Explanation:

// let person = { name: "John", age: 30, job: "Developer" };: 
// This line declares an object named person with three properties: name, age, and job, 
// each with a corresponding value.

// for (let key in person) {: This line starts a for...in loop, 
//     which iterates over the properties of the person object. In each iteration,
//      key will represent the name of a property.

// console.log(${key}: ${person[key]});: Inside the loop, 
// this line logs a message to the console. 
// The message includes the property name (key) and its corresponding value (person[key]).
// The backticks (${}) are used for template literals,
// allowing variables to be interpolated within a string.


// for of loop ( iterating over Arrays )

let colors =["red", "blue", "yellow", "green"];
for ( let color of colors) {
    console.log(color)
}


// break and continue statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;// exit the loop when i equals 3 
    }
    console.log(`Iteration ${i}`);
    
}
