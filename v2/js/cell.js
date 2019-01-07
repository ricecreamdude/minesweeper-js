function Cell (i,j){
  this.bee = true;
  this.revealed = true;
  this.w = w;
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;

  //Randomly generate bees
  if (random(1) <0.3) {
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
//
// Cell.prototype.countBees = function(){
//   if (this.bee){
//     return -1
//   }
//
//   let total = 0;
//
//   for (var i = -1; i <= 1; i++){
//     for (var j = ; j ; j++) {
//
//     }
//   }
//
// }

//Does the cell contain where the mouse is clicked?
Cell.prototype.contains = function(x,y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
}

Cell.prototype.reveal = function(){
  this.revealed = true;
}
