import Math from 'phaser'

export default class {
    constructor() { 
        this.rounds = 0;
        this.multiplier = 0;
        this.consolation = 0;
    }

    rollDices() {
        this.rounds = Math.between(3, 8);
        this.multiplier = Math.between(1, 6);
        this.consolation = Math.between(1,6);
    }
}
