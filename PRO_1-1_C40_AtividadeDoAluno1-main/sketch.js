var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;
var obstacles,obstacleImage1,obstacleImage2;

var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins;
var cars = [];
var lifeImage;
var fuelImage;
var blastImage;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/pista.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacleImage1 = loadImage("./assets/obstacle1.png");
  obstacleImage2 = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  fuelImage = loadImage("./assets/fuel.png");
  blastImage = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if(gameState === 2){
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
