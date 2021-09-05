const UPDATE_RATE = 1000; //in ms
let prevRealTime = new Date().getTime();
let gameClockLag = 0.0; // Delta between game clock and real world clock

(function runGame() {
  let currentRealTime = new Date().getTime();
  let elapsedRealTime = currentRealTime - prevRealTime;

  prevRealTime = currentRealTime;
  gameClockLag += elapsedRealTime;

  processInput();

  while (gameClockLag >= UPDATE_RATE) {
    update();
    gameClockLag -= UPDATE_RATE;
  }

  render(gameClockLag / UPDATE_RATE);
  requestAnimationFrame(runGame);
})();

function processInput() {
}

function render(gameClockLag = 0) {
  console.log('Draw to canvas (gameClockLag: %s)', gameClockLag);
}

function update() {
  console.log('Update game data');
}
