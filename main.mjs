import Game from './modules/game.mjs';
import GameBoard from './modules/game-board.mjs';
import GameField from './modules/game-field.mjs';
import GameLoop from './modules/game-loop.mjs';
import Player from './modules/player.mjs';

const GAME_CONFIG = {
  bgc: '#00000066',
  cols: 12,
  get height() { return this.rows * this.scale },
  hostEl: document.querySelector('#tetrish-game'),
  ref: 'game-board',
  rows: 20,
  scale: 13,
  get width() { return this.cols * this.scale },
};
let gameBoard =
  new GameBoard(
    GAME_CONFIG.ref,
    GAME_CONFIG.hostEl,
    GAME_CONFIG.width,
    GAME_CONFIG.height,
    GAME_CONFIG.scale,
  );
let gameField = new GameField(GAME_CONFIG.cols, GAME_CONFIG.rows);
let player = new Player();
let game = new Game(gameBoard, gameField, player);
let gameLoop = new GameLoop();

game.readyPlayer();
game.render();

gameLoop.processInput = function () {
}
gameLoop.render = function () {
  game.render();
}
gameLoop.update = function () {
  player.moveDown();
  if (game.hasCollision()) {
    player.moveUp();
    game.mergeTileIntoField();
    game.readyPlayer();
    gameField.cleanup();
  }
}
gameLoop.runGame();

// THIS WAS IN PLAYER CONSTRUCTOR
// GAME OVER
// if (collide(ARENA, PLAYER)) {
//   ARENA.forEach(row => row.fill(0));
// }
//

// -------------------------
// If we get this far, then its safe to remove the noscript & feature-check
// messages in the DOM. We're going to be forcing a render tree update anyway.
document.querySelector('#preflight-err').remove();
