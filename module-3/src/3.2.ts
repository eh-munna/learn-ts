{
  class Student {
    id: number;
    name: string;
    age: number;
    address: string;

    constructor(id: number, name: string, age: number, address: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(hours: number) {
      return `${this.name} sleeps everyday ${hours} ${
        hours < 1 ? 'hour' : 'hours'
      }`;
    }
  }

  const student = new Student(1, 'John', 20, '123 Main St');
  console.log(student.getSleep(8));

  class Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
      this.name = name;
      this.sound = sound;
    }

    makeSound(): string {
      return `${this.name} has sound: ${this.sound}`;
    }
  }

  class Cat extends Animal {
    constructor(name: string, sound: string) {
      super(name, sound);
    }

    run(): string {
      return `${this.name} is running`;
    }
  }

  class Dog extends Animal {
    constructor(name: string, sound: string) {
      super(name, sound);
    }

    walk(): string {
      return `${this.name} is walking`;
    }
  }

  const cat = new Cat('Cat', 'Meow');
  console.log(cat.run());

  const dog = new Dog('Dog', 'Woof');
  console.log(dog.walk());
}
