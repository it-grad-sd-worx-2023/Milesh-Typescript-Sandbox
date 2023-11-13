class Person { 
    ssn : string;
    first_name : string;
    last_name : string;


    //creating a custructor 
    constructor(ssn: string, first_name : string , last_name :string ){
        this.ssn = ssn;
        this.first_name = first_name;
        this.last_name = last_name;
    }


    
    getFullName(): string {
        return `${this.first_name} ${this.last_name}`
    }

}