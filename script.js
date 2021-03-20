// if one thing use modules e.g gameboard or displayController
// if need multiples e.g players use factory functions



// gameBoard module iife
const gameBoard = (() => {
    const boardArray = [1,2,3,4,5,6,7,8,9];
    boardArray.forEach(displayGame);
    
function displayGame(item) {
    const boardContainer = document.querySelector(".board-container");
    let gameSquare = document.createElement("div");
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
        const boardContainer = document.getElementById("square");
        boardContainer.addEventListener("click", placeX);
        // place X on chosen square   
        function placeX(e) {
            if (e.target.id === "square") {
                e.target.textContent = value;
                gameBoard.boardArray[0] = value;
                console.log(gameBoard.boardArray)
            } 
        }
        
    } 
    // closure
    return {choose}
} 


const playerX = Player("X");
const playerO = Player("O");

playerO.choose();









