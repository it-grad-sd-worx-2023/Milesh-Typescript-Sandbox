type a = "type a";
type b = "type b";

type ab = a & b;

let varName: a | b;
let newVarName : ab;


interface BusinessPartner{
    name: string,
    credit: number;
}

interface Identity {
    id : number;
    name: string;
}


interface Contact {
    email: string,
    phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;


let e1: Employee = {
 id: 1,
 name: "John Doe",
 email: "h@gmail.com",
 phone: "123-123123-12312",
}

let c1 : Customer ={
    name: "Milesh Taukoorah",
    credit: 12,
    email:"y@gmail.com",
    phone:"5102-123210-21312",
}

console.log(e1);
console.log(c1);



