{
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

    walk(): string {
      return `${this.name} is walking`;
    }
  }

  class Dog extends Animal {
    constructor(name: string, sound: string) {
      super(name, sound);
    }

    run(): string {
      return `${this.name} is running`;
    }
  }

  const cat = new Cat('Cat', 'Meow');

  const dog = new Dog('Dog', 'Woof');

  const activity = (animal: Animal) => {
    if (animal instanceof Cat) {
      console.log(animal.walk());
    } else if (animal instanceof Dog) {
      console.log(animal.run());
    }
  };

  const forCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const forDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const activity2 = (animal: Animal) => {
    if (forCat(animal)) {
      console.log(animal.walk());
    } else if (forDog(animal)) {
      console.log(animal.run());
    }
  };

  activity(cat);
  activity(dog);
  activity2(cat);
  activity2(dog);
}
