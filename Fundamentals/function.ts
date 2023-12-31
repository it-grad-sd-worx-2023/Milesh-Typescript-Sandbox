
function sub( a : number ,  b : number ) {
    return  b - a;
    
}
// using sub 
sub(5, 10);

// optional parameter 
// function to greet user 

function greet(name: string, greeting: string = "Hello"): void {
    console.log(`${greeting }, ${name}`);

    //calling the function without providing a value for the optional parameter
    greet("Milesh"); // output will be Hello, Milesh

}


//optional parameter


// function multiply(a: number, b : number, c?: number): number {
//     if (typeof c !== 'undefined') {
//         return a * b * c;
//     }
//         return a * b;
// }
// multiply(6,5);



// default parameter

function applyDiscount(price : number, discount : number = 0.05) {
 return price * (1 - discount);
}

applyDiscount(100,0.10);


// function getTotal


// let players = 'Fabrice', 'Noah';

// function displayTeam(teamName, ...players) {
//     console.log(`Team: ${teamName}`);
//     console.log('Players: ', players.join(', '));
//   }
  
//   // Example usage
//   displayTeam('Team A', 'John', 'Jane', 'Bob');




function multiply(a:number , b:number , c?: number) :number {
    if (typeof c !== 'undefined') {
        return a*b*c;
    }
    return a * b;
}

multiply(6,5)


function getTotal(...numbers : number[]){
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(10,20));
console.log(getTotal(10,20,30))