import { draw as drawMatrix, createMatrix } from './dot-matrix.mjs';
import Tile from './tile.mjs';

export default class Player {
  tile;
  position;

  constructor() {
    this.tile = new Tile();
  }
  reset() {
    this.tile.randomize();
    this.position = { x: 0, y: 0 };
  }
  moveTo(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
  moveDown() {
    this.position.y++;
  }
  moveUp() {
    this.position.y--;
  }
  get color() {
    return this.tile.onColor;
  }
}
