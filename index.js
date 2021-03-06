import { create as createCanvas } from './modules/canvas.mjs';
import { draw as drawRect } from './modules/rect.mjs';
import { draw as drawMatrix } from './modules/dot-matrix.mjs';
import { PIECES } from './modules/tetronimo.mjs';

// If we get this far, then its safe to remove the noscript & feature-check
// messages in the DOM. We're going to be forcing a render tree update anyway.
document.querySelector('#preflight-err').remove();

const [ARENA_COLS, ARENA_ROWS] = [12, 20];
const [SCALE_X, SCALE_Y] = [20, 20];
const GAME_BGCOLOR = '#00000066';
const GAME_WIDTH = ARENA_COLS * SCALE_X;
const GAME_HEIGHT = ARENA_ROWS * SCALE_Y;
const PLAYER = {
  onColor: '#F00',
  offColor: '#FF0',
  pos: {x: 0, y: 0},
  matrix: [
    [0],
  ],
};
const ARENA = createMatrix(ARENA_COLS, ARENA_ROWS);

// clear complete rows
function arenaSweep() {
  outer: for (let y = ARENA.length - 1; y > 0; --y) {
    for (let x = 0; x < ARENA[y].length; ++x) {
      if (ARENA[y][x] === 0) {
        continue outer;
      }
    }
    const ROW = ARENA.splice(y, 1)[0].fill(0);
    ARENA.unshift(ROW);
    ++y;
  }
}
// collision detection
function collide(arena, player) {
  const [m, o] = [player.matrix, player.pos];
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (!!m[y][x] && // is this x/y part of the visible player piece?..
          (arena[y + o.y] && // check arena has this row and...
          arena[y + o.y][x + o.x]) !== 0) { // current coordinate is not 0
            return true;
      }
    }
  }
  return false;
}
// creates an empty ARENA
function createMatrix(w, h) {
  const MATRIX = [];
  while (h--) {
    MATRIX.push(new Array(w).fill(0));
  }
  return MATRIX;
}
// draws & redraws background, landed pieces, & current player piece
function drawGame() {
  // Add a background rect
  drawRect(gameBoard.ctx, 0, 0, GAME_WIDTH, GAME_HEIGHT, GAME_BGCOLOR);
  // Landed game pieces are merged into ARENA matrix
  drawMatrix(gameBoard.ctx, ARENA);
  // Current, dropping game piece
  drawMatrix(gameBoard.ctx, PLAYER.matrix, PLAYER.pos, PLAYER.onColor);
}
// stores landed pieces by copying PLAYER matrix into ARENA matrix
function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((val, x) => {
      if (!!val) {
        arena[y + player.pos.y][x + player.pos.x] = player.offColor;
      }
    });
  });
}
// handles down key movement, auto falling of player piece, & y-collsions
function playerDrop() {
  PLAYER.pos.y++;
  if (collide(ARENA, PLAYER)) {
    PLAYER.pos.y--;
    merge(ARENA, PLAYER);
    playerReset();
    arenaSweep();
  }
  dropCounter = 0;
}
// handles left/right key movement of player piece
function playerMove(dir) {
    PLAYER.pos.x += dir;
    if (collide(ARENA, PLAYER)) {
      PLAYER.pos.x -= dir;
    }
}
// sets player.matrix to a random selection & sets player.pos to top & center
function playerReset() {
  const CURRENT_PIECE = PIECES[Math.floor(PIECES.length * Math.random())];
  PLAYER.onColor = CURRENT_PIECE.onColor;
  PLAYER.offColor = CURRENT_PIECE.offColor;
  PLAYER.matrix = CURRENT_PIECE.matrix;
  PLAYER.pos.y = 0;
  PLAYER.pos.x = Math.floor(ARENA_COLS / 2) -
                 Math.floor(CURRENT_PIECE.width / 2);
  // GAME OVER
  if (collide(ARENA, PLAYER)) {
    ARENA.forEach(row => row.fill(0));
  }
}
// handles rotation of player piece, checking for collisions
function playerRotate(dir) {
  let offset = 1;
  rotate(PLAYER.matrix, dir);
  while (collide(ARENA, PLAYER)) {
    PLAYER.pos.x += offset;
    offset = -(offset + (offset > 0? 1: -1));
    if (offset > PLAYER.matrix[0].length) {
      rotate(PLAYER.matrix, -dir);
      PLAYER.pos.x = pos;
      return;
    }
  }
}
// rotating matrices: first transpose rows -> cols, then reverse()
function rotate(matrix, dir) {
  // transpose
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      // destructuring/tuple switch; e.g. [a, b] = [b, a]
      [
        matrix[x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][y],
      ]
    }
  }
  // reverse
  if (dir > 0) {
    matrix.forEach(row => row.reverse());
  } else {
    matrix.reverse();
  }
}

/**
 *  GAME INITIALIZATION
 */
/**
 * HTMLElement in which we inset our gameBoard canvas
 * @type {Object}
 */
let gameHost = document.querySelector('#tetrish-game');
/**
 * HTMLCanvasElement for graphical elements
 * @type {Object}
 */
let gameBoard = createCanvas('gameBoard', gameHost, GAME_WIDTH, GAME_HEIGHT);
// A high scale makes it easier to use 2D matrices to describe our game pieces,
// nudge things as they fall, etc.
gameBoard.ctx.scale(SCALE_X, SCALE_Y);

// sets redraw speed in milliseconds
let dropInterval = 1000;
// tracks milliseconds since last redraw
let dropCounter = 0;
// tracks milliseconds since last requestAnimationFrame call
let lastTime = 0;
// get our first game piece
playerReset();
// kick off the game loop
update();
/**
 * GAME LOOP
 * Since we want our game to redraw at one frame per second (1fps), we have to
 * track time manually between requestAnimationFrame(update) calls.
 */
function update(time = 0) {
    const DELTA_TIME = time - lastTime;
    lastTime = time;
    dropCounter += DELTA_TIME;

    if (dropCounter > dropInterval) {
      playerDrop();
    }
    drawGame();
    requestAnimationFrame(update);
}
/**
 * GAME CONTROLS
 */
document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // keypad left
      playerMove(-1);
      break;
    case 39: // keypad right
      playerMove(1);
      break;
    case 40: // keypad down
      playerDrop();
      break;
    case 81: // Q
      playerRotate(-1);
      break;
    case 87: // W
      playerRotate(1);
      break;
  }
});
