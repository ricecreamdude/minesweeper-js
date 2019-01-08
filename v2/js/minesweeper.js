'use strict'
var grid;
var cols = 20;
var rows = 20;
var w = 40
//This code is supposed to load the sprites I created but does not seem to work
//on local browsers
// function preload(){
//   hidden = loadImage('./img/sprite_hidden_40_40.png');
//   mine = loadImage('./img/sprite_mine_40_40.png');
//   redMine= loadImage('./img/sprite_redmine_40_40.png');
// }

//P5.js setup so that we can use its 'onclick' functionality
function setup(){
  createCanvas(1001,601);
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

function mousePressed(){
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      if (grid[i][j].contains(mouseX, mouseY)){
        grid[i][j].reveal()
      }
    }
  }
}

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}
