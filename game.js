const gameBoard = (() =>{    
    let board = [];
    
    const printBoard = ()=>
    {
        if(board.length == 0) return;
        for(let i = 0; i < board.length; i++){
            console.log(i + " : " + board[i]);
        }
    }
    
    const isFull = () =>
    {
        for(let i = 0; i < 9; i++){
            if(gameBoard.board[i] == undefined){
                return false;
            }
        }
        return true;
    }
    
    return {board, isFull, printBoard};
})();

const player = (sign) => {
    return {sign}
}

const playerOne = player("X");
const playerTwo = player("O");

const turnManager = (() => {
    let isPlayerTurn = true;
    let currentPlayer = playerOne;
    let isWinnerDeclared = false;
    
    const changePlayer = () =>{
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo;
            isPlayerTurn = false;
        }  
        else{
            currentPlayer = playerOne;
            isPlayerTurn = true;
        }
    }

    const getCurrentPlayer = () =>{
        return currentPlayer;
    }

    const move = (index) => {
        if(gameBoard.board[parseInt(index)] != undefined) {
            return;
        }
        else
        {
            gameBoard.board[parseInt(index)] = currentPlayer.sign;
            displayController.display();            
        }
    }

    return {isPlayerTurn,changePlayer,move, getCurrentPlayer}
})();
