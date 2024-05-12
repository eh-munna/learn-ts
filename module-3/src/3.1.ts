{
  class Animal {
    // name: string;
    // sound: string;
    // constructor(name: string, sound: string) {
    constructor(public name: string, public sound: string) {
      //   this.name = name;
      //   this.sound = sound;
    }

    makeSound(): string {
      return `${this.name} has sound: ${this.sound}`;
    }
  }

  const cat = new Animal('Cat', 'Meow');
  console.log(cat.makeSound());
}
