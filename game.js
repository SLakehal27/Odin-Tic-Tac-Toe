const gameBoard = (() =>{    
    let board = ["","","","","","","","",""];
    
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
            if(gameBoard.board[i] == ""){
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
    let final = [];
    
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

    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    const getWinStatus = () => {
        return isWinnerDeclared;
    }

    const isArrayEqual = (arr) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] != arr[0] || arr[i] == ""){
                return false;
            }
        }
        return true;
    }
    const checkColumns = () => {
        for(let i = 0; i < 3; i++){
            if(isArrayEqual(final.map(column => column[i]))){
                isWinnerDeclared = true;
            }
        }
    }

    const checkRows = () =>{
        for(let i = 0 ; i < 3; i++){
            if(isArrayEqual(final[i])){
                isWinnerDeclared = true;
            }
        }
    }

    const checkDiagonal = () =>
    {
        let first = [];
        let second = [];
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(i==j){first.push(final[i][j])};
                if(i+j == 2){second.push(final[i][j])};
            }
        }
        
        if(isArrayEqual(first) || isArrayEqual(second)){
            isWinnerDeclared = true;
        }
    }

    const validate = () => {
        
        let copy = [...gameBoard.board];
        for(let i = 0; i < 3;i++){
            final[i] = copy.splice(0,3);
        }

        checkColumns();

        checkRows();

        checkDiagonal();

        if(isWinnerDeclared){
            displayController.declareWinner();
            return;
        }

    }

    const move = (index) => {

        if(isWinnerDeclared){
            return;
        }

        if(gameBoard.board[parseInt(index)] !== "") {
            return;
        }
        else
        {
            gameBoard.board[parseInt(index)] = currentPlayer.sign;
            displayController.display();            
            validate();
        }
    }


    return {isPlayerTurn, getWinStatus,changePlayer,move,getCurrentPlayer, validate}
})();
