import Observer from './observer.mjs';

export default class GameController {
  game;

  constructor(game) {
    this.game = game;

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37: // keypad left
          this.game.player.moveLeft();
          Observer.dispatch('player/move', 'moveLeft');
          if (this.game.hasCollision()) {
            this.game.player.moveRight();
          }
          break;
        case 39: // keypad right
          this.game.player.moveRight();
          Observer.dispatch('player/move', 'moveRight');
          if (this.game.hasCollision()) {
            this.game.player.moveLeft();
          }
          break;
        case 38:
          this.game.player.moveUp();
          break;
        case 40: // keypad down
          this.game.player.moveDown();
          Observer.dispatch('player/move', 'moveDown');
          if (this.game.hasCollision()) {
            this.game.player.moveUp();
            this.game.mergeTileIntoField();
            this.game.readyPlayer();
            this.game.field.cleanup();
          }
          break;
        case 81: // Q
          this.game.player.rotate(-1);
          break;
        case 87: // W
          this.game.player.rotate(1);
          break;
      }
    });
  }
}
