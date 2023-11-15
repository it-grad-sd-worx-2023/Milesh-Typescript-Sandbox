interface User{
    firstName: string;
    lastName: string;
    email: string;
    age?: number;
}

const user: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
}

const user2: User = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'Jane@example.com',
    age: 25
}

function getFullName(person:User){
    if(person.age){
        return `${person.firstName} ${person.lastName} ${person.email} ${person.age}`;
    }

    return `${person.firstName} ${person.lastName} ${person.email}`;
}

let james = {
    firstName: "James",
    lastName: "chocolate",
    email: "james@gmail.com",
    //age: 24
};

console.log(getFullName(james));

interface mailable{
    send(email: string): boolean;
    queue(email: string): boolean;
}

interface futureMailable extends mailable{
    later(email: string, after:number):boolean;
}

class mail implements futureMailable{

    later(email:string, after:number):boolean{
        console.log(`send email to ${email} in ${after} ms.`);
        return true;
    }

    send(email: string): boolean {
        console.log(`send email to ${email}.`);
        return true;
    }

    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
    
}
