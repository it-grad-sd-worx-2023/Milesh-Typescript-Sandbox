interface Person {
    name: string;
  }
  
  interface Employee {
    role: string;
  }
  
  type EmployeePerson = Person & Employee;
  let empPerson: EmployeePerson = { name: "John", role: "Developer" };
  console.log(empPerson);
  