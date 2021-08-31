import { create as createCanvas } from './modules/canvas.mjs';
import { draw as drawRect } from './modules/rect.mjs';
import { draw as drawMatrix } from './modules/dot-matrix.mjs';

const GAME_WIDTH = 320;
const GAME_HEIGHT = 480;
const GAME_BGCOLOR = '#00000066';
const SCALE_X = 20;
const SCALE_Y = 20;


// If we get this far, then its safe to remove the noscript & feature-check
// messages in the DOM. We're going to be forcing a render tree update anyway.
document.querySelector('#preflight-err').remove();

/**
 * HTMLElement in which we inset our gameBoard canvas
 * @type {Object}
 */
let gameHost = document.querySelector('#tetrish-game');
/**
 * Access point for graphical elements (Canvas) composed with additional
 * functions for working with them (e.g. adding shapes, etc)
 * @type {Object}
 */
let gameBoard = createCanvas('gameBoard', gameHost, GAME_WIDTH, GAME_HEIGHT);

// A high scale makes it easier to use 2D matrices to describe our game pieces,
// nudge things as they fall, etc.
gameBoard.ctx.scale(SCALE_X, SCALE_Y);

// Add a background rect
drawRect(gameBoard.ctx, 0, 0, GAME_WIDTH, GAME_HEIGHT, GAME_BGCOLOR);

/**
 * Describes "T" game piece shape
 * @type {Array}
 */
const MATRIX = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0],
];

drawMatrix(gameBoard.ctx, MATRIX, 'magenta');
