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
  hasCollision() {
    const [m, o] = [this.player.tile.matrix, this.player.position];
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (!!m[y][x] && // is this x/y part of the visible player piece?..
            (this.field.matrix[y + o.y] && // check this.field.matrix has this row and...
            this.field.matrix[y + o.y][x + o.x]) !== 0) { // current coordinate is not 0
              return true;
        }
      }
    }
    return false;
  }
  readyPlayer() {
    this.player.reset();
    this.player.moveTo(Math.floor(this.field.cols / 2)
                       - Math.floor(this.player.tile.width / 2), 0);
  }
  render() {
    // Add a background rect
    drawRect(this.board.ctx, 0, 0, this.board.width, this.board.height, '#000');
    // // Landed game pieces are merged into ARENA matrix
    drawMatrix(this.board.ctx, this.field.matrix);
    // // Current, dropping game piece
    drawMatrix(this.board.ctx,
      this.player.tile.matrix,
      this.player.position,
      this.player.color);
  }
  mergeTileIntoField() {
    this.player.tile.matrix.forEach((row, y) => {
      row.forEach((val, x) => {
        if (!!val) {
          // set matrix 'on' value to tile's offColor
          this.field.matrix[y + this.player.position.y][x + this.player.position.x] = this.player.tile.offColor;
        }
      });
    });
  }
}
