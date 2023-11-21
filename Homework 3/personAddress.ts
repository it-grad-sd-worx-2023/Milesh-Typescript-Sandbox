// defining the constructio with the personAddress object
class PersonAddress {
    constructor(
      private street: string,
      private city: string,
      private country: string
    ) {}
  
    getFullAddress(): string {
      return `${this.street}, ${this.city}, ${this.country}`;
    }
  }
  
  const personAddress = new PersonAddress(
    "Lor pied Coco",
    "Royale Road Jamaica",
    "La France"
  );
  console.log(personAddress.getFullAddress());
  
