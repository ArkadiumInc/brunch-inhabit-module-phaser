export class Text {
  constructor(game, text, x, y) {
    this.letters = text.split('').map((letter, i) => game.add.bitmapText(x + i*64, y, 'carrier_command', letter, 64));
  }
}
