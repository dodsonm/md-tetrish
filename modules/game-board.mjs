import { create as createCanvas } from './canvas.mjs';

export default class GameBoard {
  el;
  height;
  host;
  ref;
  scale;
  width;

  constructor(ref, host, w, h, scale = 1) {
    this.ref = ref;
    this.host = host;
    this.width = w;
    this.height = h;
    this.scale = scale;

    this.el = createCanvas(ref, host, w, h);
    this.el.ctx.scale(scale, scale);
  }
}
