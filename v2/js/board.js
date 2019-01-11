
//THis file should contain functions that are controlled by the game board
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

//When the game ends, reveal all the mines on the board
function revealMines(){
  console.log('reveal mines', grid);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j < rows; j++){
      if (grid[i][j].bee){
        grid[i][j].revealed = true;
      }
    }
  }
}
