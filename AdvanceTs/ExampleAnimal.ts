class Dog {
    bark():void {
        console.log("Woof!");
        
    }
}


class Cat { 
    meow(): void {
        console.log("MEOW!");
    }
}

function animalMakeSound(pet: Dog | Cat) : void {
    if(pet instanceof Dog){
        pet.bark();
    } else {
        pet.meow();
    }
}

const myDog : Dog = new Dog();
const myCat : Cat  = new Cat();


animalMakeSound(myCat);
animalMakeSound(myDog);



//function with string type checking 

// cehking the return type of  value is indeed string.

function isString(value: any) : value is string{
return typeof value === "string";
}


function example(value: string | number):void {
    if (isString(value)){
        console.log(value.length);
        
    }else {
        console.log(value);
        
    }
}

example("Hello, Typescript here");
example(42);


let someValue : any = "Hello Typescript!";
let strLength: number = (someValue as string).length;
console.log(someValue);
console.log(strLength);


let strLength1: number = (<string>someValue).length;
console.log( strLength1);

 interface Person {
    name: string;
    age: number;
 }

 let personObj : any = {
    name: "Milesh",
    age: 20,
 }


 let typedPerson = personObj as Person;
 console.log(typedPerson);
 
