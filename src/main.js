import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './scenes/Boot'
import SplashState from './scenes/Splash'
import GameState from './scenes/Game'

import DiceScene from './scenes/DiceScene'
import CardScene from './scenes/CardScene'
import RewardScene from './scenes/RewardScene'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)

    this.state.add('DiceScene', DiceScene, false)
    this.state.add('CardScene', CardScene, false)
    this.state.add('RewardScene', RewardScene, false)

    this.state.start('Boot')
  }
}

window.game = new Game()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}
