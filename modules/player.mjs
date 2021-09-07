import { draw as drawMatrix, createMatrix } from './dot-matrix.mjs';

export default class Player {
  offColor;
  onColor;
  matrix;
  position;

  constructor(m = [[1]], p = {x:0,y:0}, onc = '#999', offc = '#ccc') {
    this.matrix = m;
    this.position = p;
    this.onColor = onc;
    this.offColor = offc;
  }
}
