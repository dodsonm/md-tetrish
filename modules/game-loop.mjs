export default class GameLoop {
  constructor(updateInterval = 16, prevRealTime = new Date().getTime(),
              gameClockLag = 0.0) {
    this.updateInterval = updateInterval; //in ms
    this.prevRealTime = prevRealTime;
    this.gameClockLag = gameClockLag; // Delta between game clock and real world clock
  }

  processInput() {
    console.info('[GameLoop processInput] Please provide a method definition for processInput() on this GameLoop instance');
  }

  render() {
    console.info('[GameLoop render] Please provide a method definition for render() on this GameLoop instance');
  }

  update() {
    console.info('[GameLoop update] Please provide a method definition for update() on this GameLoop instance');
  }

  runGame() {
    // let currentRealTime = new Date().getTime();
    // let elapsedRealTime = currentRealTime - this.prevRealTime;
    //
    // this.prevRealTime = currentRealTime;
    // this.gameClockLag += elapsedRealTime;
    //
    this.processInput();
    //
    // while (this.gameClockLag >= this.updateInterval) {
    //   this.update();
    //   this.gameClockLag -= this.updateInterval;
    // }
    //
    // this.render(this.gameClockLag / this.updateInterval);
    requestAnimationFrame.bind(this, this.runGame);
    console.log('here');
    // requestAnimationFrame(this.runGame);
  }
}
