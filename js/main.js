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

let resultDiv = document.querySelector("#result");
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

function playRound(playerSelection, computerSelection) {

    let winner = "";

    console.log(`You choosed ${playerSelection}. Computer choosed ${computerSelection}.`);

    printMessage(choosedMessageElement, `You choosed ${playerSelection}. Computer choosed ${computerSelection}.`);

    if(playerSelection == computerSelection) {
        console.log(`Draw! ${playerSelection} cant beat ${computerSelection}.`);

        printMessage(winnerMessageElement, `Draw! ${playerSelection} cant beat ${computerSelection}.`);
    }
    if(playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        winner = "computer";

        printMessage(winnerMessageElement, `You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        winner = "player";

        printMessage(winnerMessageElement, `You win! ${playerSelection} beats ${computerSelection}.`);
    }
    if(playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        winner = "player";

        printMessage(winnerMessageElement, `You win! ${playerSelection} beats ${computerSelection}.`);
    }
    if(playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        winner = "computer";

        printMessage(winnerMessageElement, `You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    if(playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        winner = "computer";

        printMessage(winnerMessageElement, `You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    if(playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        winner = "player";

        printMessage(winnerMessageElement, `You win! ${playerSelection} beats ${computerSelection}.`);
    }

    return winner;

}

function game() {

    let winnerScore = 5;
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        if(winner == "player") playerScore++;
        if(winner == "computer") computerScore++;

        console.log(`Player ${playerScore} - ${computerScore} Computer`);
    }
    

    if(playerScore == computerScore) console.log("Draw. Maybe you should try again.")
    if(playerScore > computerScore) console.log("You are the winner! Congratulations.");
    if(computerScore > playerScore) console.log("You lost. Better luck next time.")

}