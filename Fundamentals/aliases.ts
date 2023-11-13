type personObject = { 
    first_name : string;
    last_name : string;
    age : number;
    job_title : string;

} | {
    department : string;
    country : string;
    first_name : string;
    last_name : string;
} | {
    first_name : string;
    last_name : string;

}


 let firstPerson : personObject;