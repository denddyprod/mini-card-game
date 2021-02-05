import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init() { }

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', 'assets/test/mushroom2.png')
    // this.load.spritesheet('cards', 'assets/buttons/button_sprite_sheet.png', 193, 71);
    this.load.image('background', 'assets/other/scene_2.png');

    this.load.image('dice-button', 'assets/ctatz/BTN_GREEN_SQ.png');

    this.load.image('dice1', 'assets/other/dieRed1.png');
    this.load.image('dice2', 'assets/other/dieRed2.png');
    this.load.image('dice3', 'assets/other/dieRed3.png');
    this.load.image('dice4', 'assets/other/dieRed4.png');
    this.load.image('dice5', 'assets/other/dieRed5.png');
    this.load.image('dice6', 'assets/other/dieRed6.png');

  }

  create() {
    this.state.start('DiceScene')
  }
}
