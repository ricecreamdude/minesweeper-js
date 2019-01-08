function Cell (col,row){
  this.bee = true;
  this.revealed = false;

  this.w = w;
  this.col = col;     //x
  this.row = row;     //y
  this.neighborCount = -1;

  this.x = col * w;
  this.y = row * w;

  //Randomly generate bees
  if (random(1) <0.1) {
    this.bee = true;
  } else {
    this.bee = false;
  }
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w)
  if(this.revealed){
    if (this.bee){
      fill(127);
      ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w * 0.5);
    } else{
      fill(200);
      rect(this.x, this.y, this.w, this.w);
      textAlign(CENTER);
      fill(0)
      if (this.neighborCount > 0){
        text(this.neighborCount, this.x+this.w*0.5, this.y+this.w*0.6)
      }
    }
  }
}

//Count number of bees surrounding cell;
//How can I reduce the O(n of this?)
Cell.prototype.countBees = function(){
  if (this.bee){
    return -1;
  }
  //XY starting from top left
  let cl, rw, total = 0;
  cl = this.col + 1;
  rw = this.row + 1;
  // console.log('Clicked Cell Coord, (x,y): ' + cl + ',' + rw);
  //Count the cells from range -1 to +1 for provided
  for (var i = -1; i <= 1; i++){
    if (cl+i < cols+1 && cl+i > 0 ){
      for (var j = -1; j <= 1; j++) {
        if (rw+j < rows+1 && rw+j > 0){
          // console.log('Cell Scanned (x,y): ' + (cl + i) + ',' + (rw + j) );
          //Array fetches grid ID starting from index 0 so we must
          //subtract 1
          if(grid[cl+i-1][rw+j-1].bee){
            total++
          }
        }
      }
    }
  }
  this.neighborCount = total;
}

//Calculate if X,Y of mouse click lies within range of cell
Cell.prototype.contains = function(x,y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
}
Cell.prototype.reveal = function(){
  background(10);
  this.revealed = true;
  //Logic to reveal all cells connected with no mines nearby
  if (this.neighborCount === 0){
    let cl, rw;
    cl = this.col + 1;
    rw = this.row + 1;
    //Check if the neighbor is not revealed to prevent stack overflow
    //Using cell iteration algorithm from "CountMines"
    //Is there a way to make this less ugly?
    for (var i = -1; i <= 1; i++){
      if (cl+i < cols+1 && cl+i > 0 ){
        for (var j = -1; j <= 1; j++) {
          if (rw+j < rows+1 && rw+j > 0){
              //Check if the neighbor is not revealed to prevent stack overflow
            if (!grid[cl+i-1][rw+j-1].revealed){
              grid[cl+i-1][rw+j-1].reveal()
            }
          }
        }
      }
    }
  }
}
