// var s = 0;
//
// (function loop() {
//   s++;
//   console.log('f ', s);
//   if (s < 5) {
//     loop();
//   }
// })();

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

// function Foo() {}
//
// Foo.prototype.sentry = 0;
//
// Foo.prototype.fart = function() {
//   this.sentry += 1;
//   console.log('PPPPBBBTTT! ', this);
//   if (this.sentry < 3) {
//     requestAnimationFrame((a) => {
//       console.log('F: ', this);
//       this.fart();
//     });
//   }
// }
//
// var x = new Foo();
// x.fart();
