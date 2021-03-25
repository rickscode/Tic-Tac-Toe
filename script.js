
// gameBoard module iife
const gameBoard = (() => {
    const boardArray = [1,2,3,4,5,6,7,8,9];

    createGameBoard();
    
function createGameBoard() {
    const changeBoardArrayValue = document.querySelector(".board-container");
    
    for(let m = 0; m < boardArray.length; m++){
        if(boardArray[m] == 1){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-one";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 2){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-two";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 3){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-three";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 4){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-four";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 5){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-five";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
           
            
        } else if(boardArray[m] == 6){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-six";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 7){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-seven";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 8){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-eight";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        } else if(boardArray[m] == 9){
            let gameSquare = document.createElement("div");
            gameSquare.id = "square-nine";
            gameSquare.className = "game-square"
            changeBoardArrayValue.appendChild(gameSquare);
            
        }
        
      } 
    
    }

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


// global boardArrayValue
const changeBoardArrayValue = document.querySelector(".board-container");
changeBoardArrayValue.addEventListener("click", placeMarker);


function placeMarker(e) {
  
  checkTurn();

  switch(e.target.id) {
       case "square-one":
        if(gameBoard.boardArray[0] == 1){
          
          gameBoard.boardArray[0] = playerTurn;
          e.target.textContent = gameBoard.boardArray[0]
          console.log(gameBoard.boardArray)
      } 
         break;
       case "square-two":
        if(gameBoard.boardArray[1] == 2){
          
          gameBoard.boardArray[1] = playerTurn;
          e.target.textContent = gameBoard.boardArray[1]
          console.log(gameBoard.boardArray)
      } 
         break;
       case "square-three":
        if(gameBoard.boardArray[2] == 3){
          
          gameBoard.boardArray[2] = playerTurn;
          e.target.textContent = gameBoard.boardArray[2]
          console.log(gameBoard.boardArray)
      } 
         break;
       case "square-four":
        if(gameBoard.boardArray[3] == 4){
          
          gameBoard.boardArray[3] = playerTurn;
          e.target.textContent = gameBoard.boardArray[3]
          console.log(gameBoard.boardArray)
      } 
         break;
       case "square-five":
        if(gameBoard.boardArray[4] == 5){
          gameBoard.boardArray[4] = playerTurn;
          e.target.textContent = gameBoard.boardArray[4]
          console.log(gameBoard.boardArray)
      }
         break;
       case "square-six":
        if(gameBoard.boardArray[5] == 6){
          
          gameBoard.boardArray[5] = playerTurn;
          e.target.textContent = gameBoard.boardArray[5]
          console.log(gameBoard.boardArray)
      }
         break;
       case "square-seven":
        if(gameBoard.boardArray[6] == 7){
          
          gameBoard.boardArray[6] = playerTurn;
          e.target.textContent = gameBoard.boardArray[6]
          console.log(gameBoard.boardArray)
      }
         break;
       case "square-eight":
        if(gameBoard.boardArray[7] == 8){
          
          gameBoard.boardArray[7] = playerTurn;
          e.target.textContent = gameBoard.boardArray[7]
          console.log(gameBoard.boardArray)
      }
         break;
       case "square-nine":
        if(gameBoard.boardArray[8] == 9){
          
          gameBoard.boardArray[8] = playerTurn;
          e.target.textContent = gameBoard.boardArray[8]
          console.log(gameBoard.boardArray)
      }
         break;
     }   
     // check for result after each play
     checkGame()
    }

// check for a winner
    function checkGame() {
      // horizontal wins
      if(gameBoard.boardArray[0] == gameBoard.boardArray[1] && gameBoard.boardArray[1] == gameBoard.boardArray[2]){
        alert("winner"); 
        resetGameBoard()      
      } else if(gameBoard.boardArray[3] == gameBoard.boardArray[4] && gameBoard.boardArray[4] == gameBoard.boardArray[5]){
        alert("winner");
        resetGameBoard()
      } else if(gameBoard.boardArray[6] == gameBoard.boardArray[7] && gameBoard.boardArray[7] == gameBoard.boardArray[8]){
        alert("winner");
        resetGameBoard()
      // vertical wins
      } else if(gameBoard.boardArray[0] == gameBoard.boardArray[3] && gameBoard.boardArray[3] == gameBoard.boardArray[6]){
        alert("winner");
        resetGameBoard()
      } else if(gameBoard.boardArray[1] == gameBoard.boardArray[4] && gameBoard.boardArray[4] == gameBoard.boardArray[7]){
        alert("winner");
        resetGameBoard()
      } else if(gameBoard.boardArray[2] == gameBoard.boardArray[5] && gameBoard.boardArray[5] == gameBoard.boardArray[8]){
        alert("winner");
        resetGameBoard()
        // diaganol wins
      } else if(gameBoard.boardArray[0] == gameBoard.boardArray[4] && gameBoard.boardArray[4] == gameBoard.boardArray[8]){
        alert("winner");
        resetGameBoard()
      } else if(gameBoard.boardArray[2] == gameBoard.boardArray[4] && gameBoard.boardArray[4] == gameBoard.boardArray[6]){
        alert("winner");
        resetGameBoard()
      } 
    }

    function resetGameBoard() {
      gameBoard.boardArray = [1,2,3,4,5,6,7,8,9];
      let newGameBoard = document.querySelectorAll(".game-square")
      newGameBoard.forEach(item => {
        item.textContent = ""
      });
    }