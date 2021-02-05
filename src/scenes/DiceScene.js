import Phaser from 'phaser'
import { Sprite } from 'phaser-ce';

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    var bg = this.add.image(0, 0, 'background');
    bg.anchor.setTo(0.5);
    bg.centerX = this.world.centerX;
    bg.centerY = this.world.centerY;

    var button = this.add.button(this.world.centerX, this.world.centerY + this.world.centerY / 2, 'dice-button', this.rollTheDice, this, 2, 1, 0);
    button.anchor.setTo(0.5);

    var s = game.add.sprite(this.world.centerX, this.world.centerY/2, 'dice1');
    s.rotation = 0;
    s.anchor.setTo(0.5);
  }

  rollTheDice() {
    console.log("CLICK")
  }

}
