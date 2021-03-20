// if one thing use modules e.g gameboard or displayController
// if need multiples e.g players use factory functions

// Can only choose first spot on the board with player O the spot displays an O
// and the first index in boardArray also become that value
// need a game flow function that controls the game in or
// player take turns 
// need a function to check winning conditions also

// gameBoard module iife
const gameBoard = (() => {
    const boardArray = [1,2,3,4,5,6,7,8,9];
    boardArray.forEach(displayGame);
    
function displayGame(item) {
    const boardContainer = document.querySelector(".board-container");
    let gameSquare = document.createElement("div");
    gameSquare.className = "squares"
    gameSquare.id = "square";
    gameSquare.textContent = item;
    boardContainer.appendChild(gameSquare);
    
} 

console.log(boardArray);
return {boardArray};
})();


// player factory function
const Player = (value) => {
    const playerValue = () => value;

    // gameboard square selection function
    const choose = () => {
        const boardContainer = document.querySelector(".board-container");
        boardContainer.addEventListener("click", placeX);
        // place X on chosen square   
        function placeX(e) {
            if (e.target.id == "square") {
                console.log(e.target);
                // gameBoard.boardArray[0] = value;
                // e.target.textContent = gameBoard.boardArray[0];
                // console.log(gameBoard.boardArray)
            } 
        }
        
    } 
    // closure
    return {choose}
} 


const playerX = Player("X");
const playerO = Player("O");

playerO.choose();









