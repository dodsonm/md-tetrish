import GameLoop from './modules/game-loop.mjs';

let g = new GameLoop();

g.processInput = function () {
  // console.log('processInput ', this);
}
g.render = function () {
  // console.log('render ', this);
}
g.update = function () {
  // console.log('UPDATE ', this);
}

// g.runGame();
