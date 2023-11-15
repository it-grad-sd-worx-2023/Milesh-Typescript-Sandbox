class newPerson{
    private _first_name: string;
    private _last_name: string;
    private _age: number;
    

    public get first_name(): string {
        return this._first_name;
    }
    public set first_name(theFirstName: string) {
        this._first_name = theFirstName;
    }

    public get last_name(): string {
        return this._last_name;
    }
    public set last_name(theLastName: string) {
        this._last_name = theLastName;
    }

    public get age(): number {
        return this._age;
    }
    public set age(theAge: number) {
        console.log("Someone is trying to change the age");
        if(theAge <=0 || theAge>=100){
            throw console.error("Invalid age!");
        }
        this._age = theAge;
    }

    public get full_name(): string {
        return `${this._first_name} ${this._last_name}`;
    }
}

let ThirdPerson = new newPerson();
//ThirdPerson.age = 26   
//let inputAge = 20  
//ThirdPerson.age = inputAge;
//if(inputAge > 0 && inputAge < 100){
 //   ThirdPerson.age = inputAge;
//}else{
 //  console.log("This person is not alive anymore");
//}

ThirdPerson.first_name = "Milesh";
ThirdPerson.last_name = "Taukoorah";
console.log(ThirdPerson.fullName)