﻿# Milesh-Typescript-Sandbox
string damentals
number Fundamentals
array Fundamentals
first file for typescript  Fundamentals (hello world!)
boolean Fundamentals

to compile ts file to js file 
we need to run tsc <file name>
then after compiling the file it will generate a js file and then we need to run node <file name> to be able to run the js file. 


Typescript is a superset of Javascript
Superset mean its javascript but they modified it to work better alongside it
Superset and subset also exist 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
what does typescript does :

static checking 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
you write all your code in ts then it will compile it to js code 
(transpile)
typescript is developement tool 
your code that you send into production is still a pute javascript code
superset of javascript
typescript is just a layer 
its helps you to write better code with less problem with better maintainable code easily understandable

 if you want to compile ts file to js 
=  tsc <file name>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const user = { name: 'milesh', age: 24}

console.log('milesh'); 
console.log(user.email); 
as you see email is not in the user object 
we will get an error with email not found. 
it will still compile but it will tell you there is an error in the code 


we write more code in typescript but its much beter and better readability with better code maintanance
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
primitive type 
onject type
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Here are some types : Number , String , Boolean, Null , Undefined, Void , Object , Array , Tuples, ... 
Any = any is more of a javascript iss code 

there is even a type known as unknown and never 
(which i never used)


when defining a variable with type
here is an example let variableName: type = (  value something like this ) 
almost all the type in typescript is lowercase 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
here is some of the code 

create a new file 

variableMe.ts


create a new variable
by passing the vlaue of greeting to an assign type such as string we will only be able to enter a string within the variable
let greetings: string = "Hello Milesh";
console.log(greetings);

when we will run tsc variableMe.ts it will generate a variableMe.js file 
we will get an error saying cannot redeclare block scopred variable 'greetings'

then we need to export {} this will remove the error and will compile the code 

lets say if we try to assign a number to greetings = 6 
it will give us an error as we assign greetings to have a type value of string 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
this is a another test for typescript other types 

// number 

lets just say we are defining a userId

let userId: number = 33341234
this is annotating that this userId will always be a number 

when we do userId.<we will get the options available in javascript> 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//boolean 

let isLoggedIn: boolean = false

isLoggedIn.<we will get the options available in javascript there wont be much for boolean>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
here is a better practice to use typescript to avoid bullshit
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
declaring the type of value or values is not always necessary to do it like that and to define the type in the beginning 

typescript is very strong 
its just depend on how we use it 


this is just the documentation 
(basic understading of typescript)


now we will understand the any type
people usually use any to avoid the type declaration 
just for the sake of getting away with it which is not a good practice 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// any 


let hero;  || we should use it as

 let hero: string;
function getHero(){
return "thor"
}

hero = getHero()

if typescript cant define the type of value store in the variable 
typescript will put it as "any" type which is not good 
this will break the consistancy of the code 
if any developer is making use of the api call
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
there is any and no implicite any
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
 


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
why would we use any ?
its when we dont want a particular value to cause type checking errors.



let obj: any = { x: 0};
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n:number - obj;

// none of the following lines of code will throw compiler error:
/// using 'any' disables all futher type checking
// you know the environment btetter than typescript.

if we want that typescript cant infer it from contet the compiler will typically default to any.

you usually want to avoid this, though, because 'any' isn't type-chjecked. use the compiler flag noImplicitAny to flag any implicit any as an error.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------ANY IS  GOOD IN VARIABLES NOT FUNCTIONS. BLANK ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


we will understand how function are define 

function addTwo(num){

((  num.ToUpperCase() )) === this we shouldnt be able to do this 
return num + 2
}


addTwo(5) 

export {}


so this is the better version of how to avoid all these problem and errors when working alongside with other developer


function addTwo(num: number) {
num.ToUpperCase() === now we wont be able to do that because we already assign the value type to the function and we are less prob to error and complications 
return num + 2 
}

addTwo(5)
export {}



here is another function with some strings 

function addTwo(num:number) {
return num + 2 
}

function getUpper(val:string){
return val.toUpperCase()
}
.

// this is another function
function signUpUser(name: string , email: string, isPaid: boolean){


}

this is another function arrow function 

let loginUSer = (name: string, email: string, isPaid: boolean) => {}

addTwo(5)
getUpper("milesh")
loginUser("h", "h@h.com") now because isPaid is complusory we will get an error bcause we didnt pass anything to isPaid 
so to fix this problem  we have to pass isPaid as default 
so the fix is isPaid: boolean = false



signUpUser(1,2 ,3) === this will be mark as any and that not good and will get an error
jhere is the alternate version that is good 
signUpUser("hitesh", "mileshtaukoorah@gmail.com", false)

export {}

the type should be  of type string
and getUpper value should be a string for it to not complain as we assign the type as string so we cant pass a number to it 


var loginUser  = fucntion ( name, email, isPaid) {
if (isPaid === void 0 =) { isPaid = false; } 

};
