'use strict'
var grid;
var cols = 20;
var rows = 20;
var w = 40;

var blownUp = 0;

//////////////////Game Settings///////////////////////
let setup_mineProb = 0.1;
let setup_canvasWidth = 800;
let setup_canvasHeight = 400;
/////////////////////////////////////////////////////

//This code is supposed to load the sprites I created but does not seem to work
//on local browsers
// function preload(){
//   hidden = loadImage('./img/sprite_hidden_40_40.png');
//   mine = loadImage('./img/sprite_mine_40_40.png');
//   redMine= loadImage('./img/sprite_redmine_40_40.png');
// }


//P5.js setup so that we can use its 'onclick' functionality
//Also used on 'New Game' button click to start new game
function setup(){

  newGame();
  createCanvas(setup_canvasWidth + 1,setup_canvasHeight + 1);

  //Calculate the number of cells to use,
  //Width and Height vars are instantiated via createCanvas
  cols = floor(width / w);
  rows = floor(height / w);

  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      grid[i][j] = new Cell(i, j);
    }
  }
}

//p5.js function to draw board
function draw(){
  background(255);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      grid[i][j].show();
      grid[i][j].countBees();
    }
  }
}


//Start new game - reset game ending properties, score, etc.
function newGame(){

  blownUp = 0;
  setDifficulty();
}

//Set Diffuclty of game by changing size and mine probablity
function setDifficulty(){
  let level = $('#difficulty')[0].value;
  switch(level){
    case 'beginner':
      setup_mineProb = 0.1;
      setup_canvasWidth = 400;
      setup_canvasHeight = 400;
    break;
    case 'easy':
      setup_mineProb = 0.12;
      setup_canvasWidth = 600;
      setup_canvasHeight = 400;
    break;
    case 'intermediate':
      setup_mineProb = 0.14;
      setup_canvasWidth = 800;
      setup_canvasHeight = 400;
    break;
    case 'advanced':
      setup_mineProb = 0.15;
      setup_canvasWidth = 800;
      setup_canvasHeight = 600;
    break;
    default:
      break;
    }
}
