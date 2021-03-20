// if one thing use modules e.g gameboard or displayController
// if need multiples e.g players use factory functions


// gameBoard module iife
const gameBoard = (() => {
    let board = [1,2,3,4,5,6,7,8,9];
    board.forEach(displayGame);
    

    
function displayGame(item) {
    const boardContainer = document.querySelector(".board-container");
    
    
    
    let gameSquare = document.createElement("div");
    gameSquare.id = "square";
    gameSquare.textContent = item;
    boardContainer.appendChild(gameSquare);

}

})();


// player factory function
const Player = (value) => {
    const playerValue = () => value;
    chooseSquare();

    // gameboard square selection function
    function chooseSquare() {
        const boardContainer = document.getElementById("square");
        boardContainer.addEventListener("click", placeX);
        // place X on chosen square   
        function placeX(e){
            if(e.target.id === "square"){
                e.target.textContent = value;
            }
        }
    }
    
} 

const playerX = Player("X");
const PlayerO = Player("O");







