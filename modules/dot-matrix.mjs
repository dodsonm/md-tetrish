import { draw as drawRect } from './rect.mjs';

function draw(ctx, matrix, color) {
  matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (!!val) {
        drawRect(ctx, x, y, 1, 1, color);
      }
    });
  });
}

export { draw };
