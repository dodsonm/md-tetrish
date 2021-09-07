import { draw as drawRect } from './rect.mjs';
import { draw as drawMatrix } from './dot-matrix.mjs';

export default class Game {
  board;
  field;
  player;

  constructor(b, f, p) {
    this.board = b;
    this.field = f;
    this.player = p;
  }

  render() {
    // Add a background rect
    drawRect(this.board.ctx, 0, 0, this.board.width, this.board.height, '#000');
    // // Landed game pieces are merged into ARENA matrix
    drawMatrix(this.board.ctx, this.field.matrix);
    // // Current, dropping game piece
    drawMatrix(this.board.ctx, this.player.matrix, this.player.pos,
               this.player.onColor);
  }
}
