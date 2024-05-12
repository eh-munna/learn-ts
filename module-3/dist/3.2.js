"use strict";
{
    class Student {
        constructor(id, name, age, address) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(hours) {
            return `${this.name} sleeps everyday ${hours} ${hours < 1 ? 'hour' : 'hours'}`;
        }
    }
    const student = new Student(1, 'John', 20, '123 Main St');
    console.log(student.getSleep(8));
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
        run() {
            return `${this.name} is running`;
        }
    }
    class Dog extends Animal {
        constructor(name, sound) {
            super(name, sound);
        }
        walk() {
            return `${this.name} is walking`;
        }
    }
    const cat = new Cat('Cat', 'Meow');
    console.log(cat.run());
    const dog = new Dog('Dog', 'Woof');
    console.log(dog.walk());
}
