
var grid;
var cols = 20;
var rows = 20;
var w = 20

//P5.js setup so that we can use its 'onclick' functionality
function setup(){
  createCanvas(401,301);

  //Calculate the number of cells to use,
  //Width and Height vars are instantiated via createCanvas
  cols = floor(width / w);
  rows = floor(height / w);

  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      grid[i][j] = new Cell( i * w, j * w);
    }
  }
}

//p5.js function to draw board
function draw(){
  background(255);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      grid[i][j].show();
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
