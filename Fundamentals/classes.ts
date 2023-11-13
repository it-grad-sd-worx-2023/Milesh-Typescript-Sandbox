class Person { 
    // public  ssn : string;
    //  private first_name : string;
    // protected last_name : string;


    //creating a custructor 
    constructor( public ssn: string, private first_name : string , private last_name :string ){
        this.ssn = ssn;
        this.first_name = first_name;
        this.last_name = last_name;
    }
    getFullName(): string {
        return `${this.first_name} ${this.last_name}`
    }
}


let secondPerson = new Person("1023", 'John', 'Do')
console.log(secondPerson.ssn)