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