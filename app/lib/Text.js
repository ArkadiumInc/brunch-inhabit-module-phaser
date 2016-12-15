export class Text {
  constructor(game, text) {
    this.letters = text.split('').map((letter, i) => game.add.bitmapText(200 + i*64, 100, 'carrier_command', letter, 64));
    game.physics.p2.enable(this.letters);
    this.letters.forEach(letter => letter.body.setRectangle(64, 64));
  }
}
