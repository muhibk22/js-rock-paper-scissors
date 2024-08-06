const arenaText = document.getElementById("arena");

let player = document.getElementById("player");
let computer = document.getElementById("computer");
let humanScore = 0;
let computerScore = 0;
player.textContent = humanScore;
computer.textContent = computerScore;
let gameOver=false;

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * moves.length);
    return moves[index];
}

    document.getElementById("rock").addEventListener("click", function () {
        makeMove("rock");
    });
    document.getElementById("paper").addEventListener("click", function () {
        makeMove("paper");
    });
    document.getElementById("scissors").addEventListener("click", function () {
        makeMove("scissors");
    });
    document.getElementById("play-again").addEventListener("click", function () {
        resetGame();
    });
    
function makeMove(option) {
    if (!gameOver){
        playRound(option, getComputerChoice());
    }
}

function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result = "You win this round!";
    } else if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        computerScore++;
        result = "Computer wins this round!";
    }
    player.textContent = humanScore;
    computer.textContent = computerScore;

    arenaText.innerHTML = `You chose ${humanChoice}, Computer chose ${computerChoice}. <br>${result}`;
    if (humanScore === 5) {
        arenaText.innerHTML += `<br><br>You are the champion!`;
        endGame();
    } else if (computerScore === 5) {
        arenaText.innerHTML += `<br><br>You Lose! <br> Computer is the winner.`;
        endGame();
    }
    
    function endGame(){
        gameOver=true;
        document.getElementById("play-again").style.display = "block";
    }
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    player.textContent = humanScore;
    computer.textContent = computerScore;
    arenaText.innerHTML = "Make your move whenever you're ready!";
    gameOver = false;
    document.getElementById("play-again").style.display = "none";
}





