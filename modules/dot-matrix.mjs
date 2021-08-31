import { draw as drawRect } from './rect.mjs';

function draw(ctx, matrix, color, offset = { x: 0, y: 0 }) {
  matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (!!val) {
        drawRect(ctx, x + offset.x, y + offset.y, 1, 1, color);
      }
    });
  });
}

export { draw };
