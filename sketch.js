var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var cars, car1;

var oppCar1, oppCar2, oppCar3, oppCar4, oppCar5, oppCar6;

var track, car1_img;

var ground;

function preload() {
  track = loadImage("images/track.jpg");
  
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  car5_img = loadImage("images/car2.png");
  car6_img = loadImage("images/car3.png");
  car7_img = loadImage("images/car4.png");

  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(1338, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  car1 = createSprite(720, 200, 50, 50);
  car1.addImage("car1", car1_img);
  car1.debug = true;

  oppCar1 = createSprite(800, -1000, 50, 50);
  oppCar1.debug = true;
  oppCar1.addImage("car2", car2_img);
  oppCar2 = createSprite(490, -650, 50, 50);
  oppCar2.debug = true;
  oppCar2.addImage("car3", car3_img);
  oppCar3 = createSprite(960, -1700, 50, 50);
  oppCar3.debug = true;
  oppCar3.addImage("car4", car4_img);
  oppCar4 = createSprite(640, -2300, 50, 50);
  oppCar4.debug = true;
  oppCar4.addImage("car5", car5_img);
  oppCar5 = createSprite(520, -200, 50, 50);
  oppCar5.debug = true;
  oppCar5.addImage("car6", car6_img);
  oppCar6 = createSprite(840, -50, 50, 50);
  oppCar6.debug = true;
  oppCar6.addImage("car7", car7_img);
}

function draw(){
  background(255);
  
  if(car1.x - oppCar1.x < oppCar1.width / 2 + car1.width / 2
  && oppCar1.x - car1.x < oppCar1.width / 2 + car1.width / 2
  && car1.y - oppCar1.y < oppCar1.height / 2 + car1.height / 2
  && oppCar1.y - car1.y < oppCar1.height / 2 + car1.height / 2) {
    game.update(3);
  }

  if(car1.x - oppCar2.x < oppCar2.width / 2 + car1.width / 2
  && oppCar2.x - car1.x < oppCar2.width / 2 + car1.width / 2
  && car1.y - oppCar2.y < oppCar2.height / 2 + car1.height / 2
  && oppCar2.y - car1.y < oppCar2.height / 2 + car1.height / 2) {
    game.update(3);
  }

  if(car1.x - oppCar3.x < oppCar3.width / 2 + car1.width / 2
  && oppCar3.x - car1.x < oppCar3.width / 2 + car1.width / 2
  && car1.y - oppCar3.y < oppCar3.height / 2 + car1.height / 2
  && oppCar3.y - car1.y < oppCar3.height / 2 + car1.height / 2) {
    game.update(3);
  }

  if(car1.x - oppCar4.x < oppCar4.width / 2 + car1.width / 2
  && oppCar4.x - car1.x < oppCar4.width / 2 + car1.width / 2
  && car1.y - oppCar4.y < oppCar4.height / 2 + car1.height / 2
  && oppCar4.y - car1.y < oppCar4.height / 2 + car1.height / 2) {
    game.update(3);
  }

  if(car1.x - oppCar5.x < oppCar5.width / 2 + car1.width / 2
  && oppCar5.x - car1.x < oppCar5.width / 2 + car1.width / 2
  && car1.y - oppCar5.y < oppCar5.height / 2 + car1.height / 2
  && oppCar5.y - car1.y < oppCar5.height / 2 + car1.height / 2) {
    game.update(3);
  }

  if(car1.x - oppCar6.x < oppCar6.width / 2 + car1.width / 2
  && oppCar6.x - car1.x < oppCar6.width / 2 + car1.width / 2
  && car1.y - oppCar6.y < oppCar6.height / 2 + car1.height / 2
  && oppCar6.y - car1.y < oppCar6.height / 2 + car1.height / 2) {
    game.update(3);
  }
  
  if(gameState === 1) {
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }

  if(gameState === 3) {
    game.ende();
  }

  fill(0);
  textSize(20);
  stroke(0);
  strokeWeight(2);
  text(mouseX + ',' + mouseY, car1.x - 23, car1.y - 60);

  drawSprites();
}
