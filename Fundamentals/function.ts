
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


function multiply(a: number, b : number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
        return a * b;
}