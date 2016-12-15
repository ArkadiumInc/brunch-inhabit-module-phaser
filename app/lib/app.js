import Phaser from 'phaser/build/custom/phaser-split';
import { Text } from './Text';

export class App {

  constructor(resources, element) {
    this.resources = resources;
    this.container = element.parentNode;
    this.game = new Phaser.Game(this.container.clientWidth, 600, Phaser.AUTO, element, this);

    this.physicalObjects = [];
  }

  preload() {
    this.game.load.image('arrow', `${this.resources}/arrow.png`);
    this.game.load.bitmapFont('carrier_command', `${this.resources}/fonts/carrier_command.png`, `${this.resources}/fonts/carrier_command.xml`);
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    this.game.stage.backgroundColor = '#54026E';

    this.arrow = this.game.add.sprite(400, 300, 'arrow');
    this.arrow.anchor.setTo(0.5, 0.5);

    this.text = new Text(this.game, 'InHabit', this.container.offsetWidth/2 - 224, this.container.offsetHeight - 100);

    this.physicalObjects.push(this.text.text);
    this.physicalObjects.push(this.arrow);

    this.initPhysics();
  }

  update() {
    this.arrow.body.rotation = this.game.physics.arcade.moveToPointer(
      this.arrow,
      60,
      this.game.input.activePointer,
      500
    );
  }

  render() {
    this.game.debug.spriteInfo(this.arrow, 32, 32);
  }

  initPhysics() {
    //  Enable p2 Physics for the sprite
    this.game.physics.p2.enable(this.physicalObjects, false);
    this.arrow.body.setRectangle(62, 46);
  }
}
