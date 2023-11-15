class newPerson { 
    public first_name : string;
    public last_name : string;
    private _age : number;
    


    public get age(){
        return this.age;
    }

    public set age(theAge : number){
        if(theAge <= 0 || theAge >= 100){
            throw new console.error("Invalid Age!");
        }
        this._age = theAge;
    }

    public  get fullName(){
        return `${
         this.first_name
        } ${this.last_name}`
    }
}

let thirdPerson = new newPerson();
thirdPerson.age = 23;
// console.log(thirdPerson.age);

let inputage = 20;
thirdPerson.age = inputage;

if(inputage > 0 && inputage < 100){
    thirdPerson.age = inputage;
}

thirdPerson.first_name = "Milesh";
thirdPerson.last_name = 'Taukoorah';
console.log(thirdPerson.fullName);
