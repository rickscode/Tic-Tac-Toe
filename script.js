// if one thing use modules e.g gameboard or displayController
// if need multiples e.g players use factory functions

const gameBoard = (() => {
    let board = [1,2,3,4,5,6,7,8,9];
    return board;
})();


