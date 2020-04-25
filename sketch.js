var canvas, backgroundImage;

var car1,car2,car3,car4;
var gameState = 0;
var playerCount;
var cars = [];
var database;
var form, player, game;

var car1_img,car2_img,car3_img,car4_img,ground_img,track_img;
var allPlayers;
var distance = 0

function preload(){
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");

  ground_img = loadImage("images/ground.png");
  track_img = loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-70);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

