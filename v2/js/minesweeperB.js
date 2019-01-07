//Tutorial Link: https://therealmofcode.com/posts/2012/11/building-minesweeper-game-using-javascript-html-css.html
//Github for Reference: https://github.com/zminic/minesweeper.js

//CLICK function only works within P5 canvas OMG  
(function($)
{
  function setup(){
    createCanvas(1,1);
  }
  function draw(){

  }
///////////////////////////////////////////////////////////////////////////////
  var Game = function(gameElement){




  }


///////////////////////////////////////////////////////////////////////////////
// I'm going to draw the board using series of div elements floated to left.
// To break a row I will add another div element with clear: left style.
  var Board = function(mines){

    let element = $('.board');
    let dimension = 7;
    let mineNumber = mines
    let boardData = [];


    //Draw divs for board and instantiate board data
    function drawBoard()
    {
       var i, j, fieldElement;

       for (i = 0; i < dimension; i++)
       {
           boardData[i] = [];   //Append data to board array

           for (j = 0; j < dimension; j++)
           {
               fieldElement = $('<div class="field hidden" />')
                   .appendTo(element);
               boardData[i][j] = Field(fieldElement, i, j);
               fieldElement.data('location', { x: i, y: j });
           }

           //element used to create rows and break elements
           $('<div class="clear" />').appendTo(element);
       }
       console.log(boardData);

    }

    function mousePressed(){
      console.log('MOUSE PRESS RAN')
      for (i = 0; i < dimension; i++){
        for (j = 0; j < dimension; j++){
          if (boardData[i][j].contains(mouseX,mouseY)){
            console.log(boardData[i][j]);
          }
        }
          //element used to create rows and break elements

      }

    }

    //Utility function
    function getRandomNumber(max)
    {
      return Math.floor( (Math.random() * 1000) + 1) % max;
    }

    //Randomly place mines within field based on X value
    function plantMines()
    {
      var i, minesPlanted = 0, x, y;

      while (minesPlanted < mines)
      {
        x = getRandomNumber(dimension);
        y = getRandomNumber(dimension);

        if (!boardData[x][y].isMine)
        {
          // console.log('BOARD DATA:', boardData[x][y])
          boardData[x][y].setMine(true);
          minesPlanted++;
        }

      }
    }

    drawBoard();

    plantMines();
  }
//////////////////////////////////////////////////////////////////////

function mousePressed(){
  console.log('Mouse Press Pressed OOOO')
}

var Field = function(element, x, y){
  return {
    data: {
      fieldElement: element,
      fieldX: x,
      fieldY: y,
      isMine: false,
      isHidden: true,
      w: 40
    },
    setMine: function(value){
      let data = this.data;
      data.isMine = value;
      data.fieldElement.addClass('mine')
      // console.log('Mine set', data);
    },
    reveal: function(num){
      this.isHidden = false;
    },
    //Count the number of mines around the cell. If it's a bomb, end the game.
    //Otherwise progamatically count surrounding tiles and return # of mines
    //surrounding this field.
    countMines: function(){
      let num = 0;
      let data = this.data;
      //If it's a mine, boom
      if (data.isMine) {
        return -1
      } else {
        return num;
      }
    },

    contains: function(x,y){
      return (x > this.x && x < this.x + this.w &&  y > this.y && y < this.y + this.w)
    }


  }
}


//Execute Game
Board(15);

// On click function passes the click event
$('.field').on('click', (a) => {
  let el = $(a.target);

  if ( el.hasClass('hidden') ){
    el.removeClass('hidden');
    el.data.isHidden = false;

  }


})




}(jQuery));
