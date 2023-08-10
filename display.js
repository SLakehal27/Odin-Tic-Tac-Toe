const displayController = (() => {
    
    const turntxt = document.querySelector(".playermessage");
    const fields = document.querySelectorAll(".field");
    let hasDeclaredWinner = false;
    
    const declareWinner = () =>
    {
        if(hasDeclaredWinner) return;
        hasDeclaredWinner = true;
        turnManager.changePlayer();
        turntxt.textContent = "Player " + turnManager.getCurrentPlayer().sign + " has won!";
    }

    const display = () =>
    {   
        turnManager.changePlayer();
        turntxt.textContent = "Player " + turnManager.getCurrentPlayer().sign + "'s turn.";
        fields.forEach((field,index)=>{
            field.textContent = gameBoard.board[index];
        })
        
        if(gameBoard.isFull() && !turnManager.getWinStatus()) {
            turntxt.textContent = "Draw.";
            return;
        }

    }
    

    return {display, declareWinner}
})();