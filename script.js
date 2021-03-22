// if one thing use modules e.g gameboard or displayController
// if need multiples e.g players use factory functions
// need a game flow function that controls the game in or
// player take turns 
// need a function to check winning conditions also

// gameBoard module iife
const gameBoard = (() => {
    const boardArray = [1,2,3,4,5,6,7,8,9];

    displayGame();
    
function displayGame() {
    const changeBoardArrayValue = document.querySelector(".board-container");
    
    for(let m = 0; m < boardArray.length; m++){
        if(boardArray[m] == 1){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-one";
            gameSquare.textContent = boardArray[0];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 2){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-two";
            gameSquare.textContent = boardArray[1];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 3){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-three";
            gameSquare.textContent = boardArray[2];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 4){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-four";
            gameSquare.textContent = boardArray[3];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 5){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-five";
            gameSquare.textContent = boardArray[4];
            changeBoardArrayValue.appendChild(gameSquare);
           
            
        } else if(boardArray[m] == 6){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-six";
            gameSquare.textContent = boardArray[5];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 7){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-seven";
            gameSquare.textContent = boardArray[6];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 8){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-eight";
            gameSquare.textContent = boardArray[7];
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 9){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-nine";
            gameSquare.textContent = boardArray[8];
            changeBoardArrayValue.appendChild(gameSquare);
            
        }
        
    } }

return {boardArray};

})();

 
///////////////////////////////TESTING GROUND///////////////////////////////////////

//player factory function
const Player = (value) => {
  const playerValue = () => value;
  return{value}
};

// player objects with name values
const playerX = Player("X");
const playerY = Player("O");
let playerTurn = playerY.value;

// change player turn
function checkTurn() {
  if(playerTurn == playerX.value) {
    playerTurn = playerY.value;
  } else if(playerTurn == playerY.value) {
    playerTurn = playerX.value;
  }
}


// change boardArrayValue
const changeBoardArrayValue = document.querySelector(".board-container");
changeBoardArrayValue.addEventListener("click", placeMarker);


function placeMarker(e) {
  // check player turn
  checkTurn();
  // need to not allow multiple selections on the same square
  
  switch(e.target.id) {
       case "square-one":
         gameBoard.boardArray[0] = playerTurn;
          
           console.log(playerTurn)
                     console.log(gameBoard.boardArray)
         break;
       case "square-two":
         gameBoard.boardArray[1] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-three":
         gameBoard.boardArray[2] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-four":
         gameBoard.boardArray[3] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-five":
         gameBoard.boardArray[4] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-six":
         gameBoard.boardArray[5] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-seven":
         gameBoard.boardArray[6] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-eight":
         gameBoard.boardArray[7] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
       case "square-nine":
         gameBoard.boardArray[8] = playerTurn;
                     console.log(gameBoard.boardArray)
         break;
     }   

    }