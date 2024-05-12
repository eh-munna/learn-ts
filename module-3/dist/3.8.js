"use strict";
{
    // Polymorphism
    class Player {
        // name: string;
        // constructor(name: string) {
        //   this.name = name;
        // }
        playerRole(role) {
            //   return `${this.name} is a ${role}`;
            return `Player is a ${role}`;
        }
    }
    class Bowler extends Player {
        constructor() {
            // constructor(name:string) {
            //   super(name);
            super();
        }
    }
    const bowler = new Bowler();
    const batter = new Bowler();
    console.log(bowler.playerRole(`Bowler`));
    console.log(batter.playerRole(`Batter`));
}
