import Observer from './observer.mjs';

export default class GameController {
  constructor() {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37: // keypad left
          Observer.dispatch('input/move', 'left');
          // playerMove(-1);
          break;
        case 39: // keypad right
          Observer.dispatch('input/move', 'right');
          //playerMove(1);
          break;
        case 40: // keypad down
          Observer.dispatch('input/move', 'down');
          //playerDrop();
          break;
        case 81: // Q
          Observer.dispatch('input/rotate', -1);
          //playerRotate(-1);
          break;
        case 87: // W
          Observer.dispatch('input/rotate', 1);
          //playerRotate(1);
          break;
      }
    });
  }
}
