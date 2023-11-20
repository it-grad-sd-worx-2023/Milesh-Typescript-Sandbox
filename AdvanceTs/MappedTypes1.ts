type NullableProps<T> = {
    [K in keyof T]: T[K] | null;
  };
  
  interface Person {
    name: string;
    age: number;
  }
  
  let nullablePerson: NullableProps<Person> = {
    name: "John",
    age: null,
  };
  

  console.log(nullablePerson);
  