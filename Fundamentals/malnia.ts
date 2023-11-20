class Animal {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public makeSound(): void {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  const cat = new Animal("Cat");
  cat.makeSound();
  