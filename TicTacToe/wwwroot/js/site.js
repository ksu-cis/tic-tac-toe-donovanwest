var turn = "x";


function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "Player " + winner.innerText + " Wins!";
}

function checkForWin() {
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < 9; i += 3) {
        if (cells[i].innerText != "" && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText == cells[2 + i].innerText) {
            setWinner(cells[0 + 1]);
            return true;
        }
    }

    for (var j = 0; j < 9; j++) {
        if (cells[j].innerText != "" && cells[0+j].innerText === cells[3+j].innerText && cells[3+j].innerText === cells[6+j].innerText) {
            setWinner(cells[0 + j].innerText)
            return true;
        }
    }

    if (cells[0].innerText != "" && cells[0].innerText == cells[4].innerText && cells[4].innerText == cells[8].innerText) {
        setWinner(cells[0]);
        return true;
    }

    if (cells[2].innerText != "" && cells[0].innerText == cells[2].innerText && cells[4].innerText == cells[6].innerText) {
        setWinner(cells[0]);
        return true;
    }

    return false;
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") turn = "o";
        else turn = "x";
        setTurn();
    }
    if (!checkForWin())
        setTurn();
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", onClick);
}
setTurn();


var form = document.getElementById("board");
var cells = document.getElementsByClassName("cell");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener(event => { event.preventDefault });
}