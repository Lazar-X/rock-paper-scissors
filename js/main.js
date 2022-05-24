window.onload = function() {

    console.log("connected");

    let rockButton = document.querySelector("#rock");
    let paperButton = document.querySelector("#paper");
    let scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener("click", () => {
        playRound("Rock", computerPlay());
    });
    paperButton.addEventListener("click", () => {
        playRound("Paper", computerPlay());
    });
    scissorsButton.addEventListener("click", () => {
        playRound("Scissors", computerPlay());
    });

}

let choosedMessageElement = document.querySelector("#choosedMessage");
let winnerMessageElement = document.querySelector("#winnerMessage");
let resultMessageElement = document.querySelector("#resultMessage");
let finalMessageElement = document.querySelector("#finalMessage");

function printMessage(element, message) {
    element.textContent = message;
}

function computerPlay() {

    let number = Math.random();
    let roundedNumber = Math.floor(number * 3) + 1;

    let computerChoice;

    switch(roundedNumber) {
        case 1: computerChoice = "Rock";
        break;
        case 2: computerChoice ="Paper";
        break;
        case 3: computerChoice = "Scissors";
        break;
        default: computerChoice = "Impossible!";
    }

    return computerChoice;

}

let playerScore = 0;
let computerScore = 0;
let winnerScore = 5;

function playRound(playerSelection, computerSelection) {

    let winner = "";
    
    printMessage(choosedMessageElement, `You choosed ${playerSelection}. Computer choosed ${computerSelection}.`);

    if(playerSelection == computerSelection) {
        printMessage(winnerMessageElement, `Draw! ${playerSelection} cant beat ${computerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }
    if(playerSelection == "Rock" && computerSelection == "Paper") {
        winner = "computer";
        computerScore++;
        printMessage(winnerMessageElement, `You lose! ${computerSelection} beats ${playerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        winner = "player";
        playerScore++;
        printMessage(winnerMessageElement, `You win! ${playerSelection} beats ${computerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }
    if(playerSelection == "Paper" && computerSelection == "Rock") {
        winner = "player";
        playerScore++;
        printMessage(winnerMessageElement, `You win! ${playerSelection} beats ${computerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }
    if(playerSelection == "Paper" && computerSelection == "Scissors") {
        winner = "computer";
        computerScore++;
        printMessage(winnerMessageElement, `You lose! ${computerSelection} beats ${playerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }
    if(playerSelection == "Scissors" && computerSelection == "Rock") {
        winner = "computer";
        computerScore++;
        printMessage(winnerMessageElement, `You lose! ${computerSelection} beats ${playerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }
    if(playerSelection == "Scissors" && computerSelection == "Paper") {
        winner = "player";
        playerScore++;
        printMessage(winnerMessageElement, `You win! ${playerSelection} beats ${computerSelection}.`);
        printMessage(resultMessageElement, `Player ${playerScore} - ${computerScore} Computer`);
    }

    if(playerScore == winnerScore) {
        printMessage(finalMessageElement, "You are the winner! Congratulations.");
    }
    if(computerScore == winnerScore) {
        printMessage(finalMessageElement, "You lost. Better luck next time.");
    }

}