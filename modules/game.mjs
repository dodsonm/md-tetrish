export default class Game {
  board;
  field;
  player;

  constructor(b, f, p) {
    this.board = b;
    this.field = f;
    this.player = p;
  }

  drawGame() {
    // Add a background rect
    drawRect(this.board.ctx, 0, 0, board.width, board.height, GAME_BGCOLOR);
    // Landed game pieces are merged into ARENA matrix
    drawMatrix(this.board.ctx, this.field);
    // Current, dropping game piece
    drawMatrix(this.board.ctx, this.player.matrix, this.player.pos,
               this.player.onColor);
  }
}
