class Serson {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const serson = new Serson("Milesh");
  console.log(serson.getName()); // person.name isn't accessible from outside the class since it's private