const displayController = (() => {
    
    const turntxt = document.querySelector(".playermessage");
    const fields = document.querySelectorAll(".field");

    const display = () =>
    {
        gameBoard.printBoard();
        turnManager.changePlayer();
        turntxt.textContent = "Player " + turnManager.getCurrentPlayer().sign + "'s turn.";
        fields.forEach((field,index)=>{
            field.textContent = gameBoard.board[index];
        })

        if(gameBoard.isFull()) {
            turntxt.textContent = "Draw.";
            return;
        }
    }
    

    return {display}
})();