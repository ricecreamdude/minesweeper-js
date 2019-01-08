function Cell (col,row){
  this.bee = true;
  this.revealed = true;

  this.w = w;
  this.col = col;     //x
  this.row = row;     //y

  this.x = col * w;
  this.y = row * w;

  // this.text;
  //Randomly generate bees
  if (random(1) <0.3) {
    this.bee = true;
  } else {
    this.bee = false;
  }

  this.revealed = true;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w)
  if(this.revealed){
    if (this.bee){
      ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w * 0.5)
    }
  }
}

//Count number of bees surrounding cell;
Cell.prototype.countBees = function(){
  if (this.bee){
    return -1;
  }
  let cl, rw, total = 0;
  cl = this.col + 1;
  rw = this.row + 1;

  //XY starting from top left
  console.log('Clicked Cell Coord, (x,y): ' + cl + ',' + rw);

  //Count the cells from range -1 to +1 for provided
                //x = col
  for (var i = -1; i <= 1; i++){
    if (cl+i < cols+1 && cl+i > 0 ){
      // console.log('Cell Scanned (x): ', (cl + i) );
      for (var j = -1; j <= 1; j++) {
        if (rw+j < rows+1 && rw+j > 0){
          // console.log('Cell Scanned (y):', (rw + j ) );
          console.log('Cell Scanned (x,y): ' + (cl + i) + ',' + (rw + j) );
          // console.log('Data: ', grid[cl+i][rw+j]);

          //Array fetches grid ID starting from index 0 so we must
          //subtract 1
          if(grid[cl+i-1][rw+j-1].bee){
            total++
          }
        }
      }
    }
  }
  // console.log('total: ', total);
  return total;
}

//Does the cell contain where the mouse is clicked?
Cell.prototype.contains = function(x,y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
}

Cell.prototype.reveal = function(){
  this.revealed = true;
}
