import GameLoop from './modules/game-loop.mjs';
import GameController from './modules/game-controller.mjs';
import Observer from './modules/observer.mjs';


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
