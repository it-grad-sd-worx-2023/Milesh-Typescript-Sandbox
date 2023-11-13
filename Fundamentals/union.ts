function add(a:any , b:any){
 
    a = 10;
    b = 20;

    if(typeof a === 'number' && typeof b === 'number')
    {
        return a + b
    }


    a = "hello";
    b = 'test';
    if(typeof a === 'string' && typeof b === 'string')
    {
        return `${a} ${b}`;
    }

    throw new Error('parameters must be number or string');
}


let result : number | string | boolean;
result = 10;
result = 'hi';
result = false;

console.log(result);


type alphanumeric = string | number | boolean;
let input: alphanumeric;
input = 100;
input = "hello from mauritius";
input = false;
console.log(input);




