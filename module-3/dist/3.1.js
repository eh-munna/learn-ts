"use strict";
{
    class Animal {
        // name: string;
        // sound: string;
        // constructor(name: string, sound: string) {
        constructor(name, sound) {
            this.name = name;
            this.sound = sound;
            //   this.name = name;
            //   this.sound = sound;
        }
        makeSound() {
            return `${this.name} has sound: ${this.sound}`;
        }
    }
    const cat = new Animal('Cat', 'Meow');
    console.log(cat.makeSound());
}
