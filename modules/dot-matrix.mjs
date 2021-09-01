import { draw as drawRect } from './rect.mjs';

/**
 * Iterates over a 2D array where zeroes are skipped and non-zeroes draw a 1x1
 * unit square. Use a CSS color value as the non-zero.
 * @param  {[type]} ctx       HTMLCanvasElement context
 * @param  {[type]} matrix    2D array to describe shape
 * @param  {Object} [offset={ x: 0, y: 0 }]
 */
function draw(ctx, matrix, offset = { x: 0, y: 0 }, color = '#999') {
  matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (!!val) {
        drawRect(ctx, x + offset.x, y + offset.y, 1, 1, color);
      }
    });
  });
}

export { draw };
