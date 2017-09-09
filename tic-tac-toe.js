window.onload = choosePlayer;

function play(player1, player2) {
    var buttons = document.querySelectorAll(".board");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            alert("buttonsi " + i);
            if (this.innerHTML == "") {
                this.innerHTML = player1;
                computerMove(player1, player2);
            }
        }
    } 
    document.getElementById("newGame").onclick = function() {

        document.querySelector("message").innerHTML = "";
    }
    reset();
}

//select Computer or Human
function choosePlayer() {
    document.getElementById("chooseX").onclick = function() {
        play("X", "O");
    }

    document.getElementById("chooseO").onclick = function() {
        play("O", "X");
    }
}

//reset all divs
function reset() {
    var buttons = document.querySelectorAll(".board");
    document.getElementById("newGame").onclick = function() {
        for(var i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = "";
        }
        document.querySelector("message").innerHTML = "";
    }
}
//computer move
function computerMove(player, computer){
    var trackPos = []; //keeps tracks of random positions
    var k;
    var freeButtons = document.querySelectorAll(".board");
    for(var i = 0; i < freeButtons.length; i++) {
        var pos = Math.floor(Math.random() * 8);

        for(k = 0; k < trackPos.length; k++) {
            if (trackPos[k] = pos)
                pos = Math.floor(Math.random() * 8);
        }
        trackPos.push(pos);
        if (freeButtons[pos].innerHTML == "") {
            freeButtons[pos].innerHTML = computer;
            break;
        }
    }

    checkWhoWon(player);
    checkWhoWon(computer);
}

//Check for winner
function checkWhoWon(player){
    var whoWon = document.querySelectorAll(".board");
    if (whoWon[0].innerHTML == player && whoWon[1].innerHTML == player && whoWon[2].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }
    if (whoWon[3].innerHTML == player && whoWon[3].innerHTML == player && whoWon[5].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }
    if (whoWon[6].innerHTML == player && whoWon[7].innerHTML == player && whoWon[8].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }
    if (whoWon[0].innerHTML == player && whoWon[3].innerHTML == player && whoWon[6].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }
    if (whoWon[1].innerHTML == player && whoWon[4].innerHTML == player && whoWon[7].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }
    if (whoWon[2].innerHTML == player && whoWon[5].innerHTML == player && whoWon[8].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }
    if (whoWon[2].innerHTML == player && whoWon[4].innerHTML == player && whoWon[6].innerHTML == player) {
        document.getElementById("message").innerHTML = player + " Won";
    }

}






