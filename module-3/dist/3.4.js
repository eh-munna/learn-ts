"use strict";
{
    class Animal {
        constructor(name, sound) {
            this.name = name;
            this.sound = sound;
        }
        makeSound() {
            return `${this.name} has sound: ${this.sound}`;
        }
    }
    class Cat extends Animal {
        constructor(name, sound) {
            super(name, sound);
        }
        walk() {
            return `${this.name} is walking`;
        }
    }
    class Dog extends Animal {
        constructor(name, sound) {
            super(name, sound);
        }
        run() {
            return `${this.name} is running`;
        }
    }
    const cat = new Cat('Cat', 'Meow');
    const dog = new Dog('Dog', 'Woof');
    const activity = (animal) => {
        if (animal instanceof Cat) {
            console.log(animal.walk());
        }
        else if (animal instanceof Dog) {
            console.log(animal.run());
        }
    };
    const forCat = (animal) => {
        return animal instanceof Cat;
    };
    const forDog = (animal) => {
        return animal instanceof Dog;
    };
    const activity2 = (animal) => {
        if (forCat(animal)) {
            console.log(animal.walk());
        }
        else if (forDog(animal)) {
            console.log(animal.run());
        }
    };
    activity(cat);
    activity(dog);
    activity2(cat);
    activity2(dog);
}
