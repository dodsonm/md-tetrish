import { draw as drawMatrix, createMatrix } from './dot-matrix.mjs';

export default class GameField {
  cols;
  matrix;
  rows;

  constructor(c, r) {
    this.cols = c;
    this.rows = r;
    this.matrix = createMatrix(this.cols, this.rows);
  }
}
