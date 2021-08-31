import { create as createCanvas } from './modules/canvas.mjs';
import { draw as drawRect } from './modules/rect.mjs';

const GAMEBOARD_WIDTH = 320;
const GAMEBOARD_HEIGHT = 480;
const GAMEBOARD_BGCOLOR = '#00000066';

// If we get this far, then its safe to remove the noscript & feature-check
// messages in the DOM. We're going to be forcing a render tree update anyway.
document.querySelector('#preflight-err').remove();

/**
 * HTMLElement in which we inset our gameBoard canvas
 * @type {Object}
 */
let gameHost = document.querySelector('#tetrish-game');
/**
 * HTMLCanvasElement to house all our game elements & animations
 * @type {Object}
 */
let gameBoard = createCanvas('gameBoard', gameHost, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);

gameBoard.ctx.fillStyle = GAMEBOARD_BGCOLOR;
gameBoard.ctx.fillRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
