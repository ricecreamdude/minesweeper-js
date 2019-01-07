function Cell (x,y){
  this.bee = true;
  this.revealed = true;
  this.w = w;
  this.x = x;
  this.y = y;

  //Randomly generate bees
  if (random(1) <0.2) {
    this.bee = true;
  } else {
    this.bee = false;
  }

  this.revealed = false;
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

//Does the cell contain where the mouse is clicked?
Cell.prototype.contains = function(x,y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
}

Cell.prototype.reveal = function(){
  this.revealed = true;
}
