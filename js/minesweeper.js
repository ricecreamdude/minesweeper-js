//Tutorial Link: https://therealmofcode.com/posts/2012/11/building-minesweeper-game-using-javascript-html-css.html
//Github for Reference: https://github.com/zminic/minesweeper.js



(function($)
{

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
    }


    //Utility function
    function getRandomNumber(max)
    {
      return Math.floor( (Math.random() * 1000) + 1) % max;
    }

    function plantMines()
    {
      var i, minesPlanted = 0, x, y;

      while (minesPlanted < mines)
      {
        x = getRandomNumber(dimension);
        y = getRandomNumber(dimension);

        if (!boardData[x][y].isMine)
        {
          console.log('BOARD DATA:', boardData[x][y])
          boardData[x][y].setMine(true);
          minesPlanted++;
        }

      }
    }


    drawBoard();
    plantMines();
  }

//////////////////////////////////////////////////////////////////////

var Field = function(element, x, y){
  return {
    data: {
      fieldElement: element,
      fieldX: x,
      fieldY: y,
      isMine: false
    },
    setMine: function(value){
      let data = this.data;
      data.isMine = value;
      data.fieldElement.addClass('mine')
      console.log('Mine set', data);
    }
  }
}

Board(15);



}(jQuery));
