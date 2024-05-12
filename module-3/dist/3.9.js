"use strict";
{
    class Car1 {
        startEngine() {
            console.log('Start Engine');
        }
        stopEngine() {
            console.log(`Stop Engine`);
        }
        drive() {
            console.log(`Drive`);
        }
    }
    class Vehicle2 {
    }
    class Car2 extends Vehicle2 {
        startEngine() {
            console.log('Start Engine');
        }
        stopEngine() {
            console.log(`Stop Engine`);
        }
        drive() {
            console.log(`Drive`);
        }
    }
}
