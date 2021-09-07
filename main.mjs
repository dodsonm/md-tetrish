import Game from './modules/game.mjs';
import GameBoard from './modules/game-board.mjs';
import GameField from './modules/game-field.mjs';
import Player from './modules/player.mjs';

// import GameLoop from './modules/game-loop.mjs';
// import GameController from './modules/game-controller.mjs';
// import Observer from './modules/observer.mjs';
//
const GAME_CONFIG = {
  ref: 'game-board',
  hostEl: document.querySelector('#tetrish-game'),
  cols: 12,
  rows: 20,
  scale: 20,
  get width() { return this.cols * this.scale },
  get height() { return this.rows * this.scale },
  bgc: '#00000066',
}
let gameBoard =
  new GameBoard(
    GAME_CONFIG.ref,
    GAME_CONFIG.hostEl,
    GAME_CONFIG.width,
    GAME_CONFIG.height,
    GAME_CONFIG.scale,
  );
let player = new Player();
let gameField = new GameField(GAME_CONFIG.cols, GAME_CONFIG.rows);
let game = new Game(gameBoard, gameField, player);
game.render();
//
//
// let gameController = new GameController();
//
// Observer.on('input/move', (action, payload) => {
//   console.log(action,  payload);
//   switch (payload) {
//     case "left":
//       // move left
//       break;
//     case "right":
//       // move right
//       break;
//     case "down":
//       // move down
//       break;
//   }
// })
// Observer.on('input/rotate', (action, payload) => {
//   console.log(action,  payload);
//   switch (payload) {
//     case 1:
//       //rotate clockwise
//       break;
//     case -1:
//       // rotate counter-clockwise
//       break;
//   }
// })


// let gameLoop = new GameLoop();
//
// gameLoop.processInput = function () {
//   // console.log('processInput ', this);
// }
// gameLoop.render = function () {
//   // console.log('render ', this);
// }
// gameLoop.update = function () {
//   // console.log('UPDATE ', this);
// }
//
// // gameLoop.runGame();

// -------------------------
// If we get this far, then its safe to remove the noscript & feature-check
// messages in the DOM. We're going to be forcing a render tree update anyway.
document.querySelector('#preflight-err').remove();
