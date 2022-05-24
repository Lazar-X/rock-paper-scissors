window.onload = function() {

    console.log("connected");

    game();

    let rockButton = document.querySelector("#rock");
    let paperButton = document.querySelector("#paper");
    let scissorsButton = document.querySelector("#scissors");
}

function computerPlay() {

    let number = Math.random();
    // console.log(number);
    let roundedNumber = Math.floor(number * 3) + 1;
    // console.log(roundedNumber);

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

    // console.log("Computer choosed " + computerChoice);

    return computerChoice;
}

function playerPlay() {

    let playerChoice = prompt("Choose between rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase() + " ";
    let playerChoiceNew = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1, playerChoice.indexOf(" ") + 1);
    playerChoiceNew = playerChoiceNew.trim();

    // console.log(playerChoiceNew);

    if((playerChoiceNew !== "Rock") && (playerChoiceNew !== "Paper") && (playerChoiceNew !== "Scissors")) {
        console.log("Remember you can choose rock, paper or scissors only!");
    }

    // else {
    //     console.log("You choosed " + playerChoiceNew);
    // }

    return playerChoiceNew;
}

function playRound(playerSelection, computerSelection) {

    let winner = "";

    console.log(`You choosed ${playerSelection}. Computer choosed ${computerSelection}.`);

    if(playerSelection == computerSelection) {
        console.log(`Draw! ${playerSelection} cant beat ${computerSelection}.`);
    }
    if(playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        winner = "computer";
    }
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        winner = "player";
    }
    if(playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        winner = "player";
    }
    if(playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        winner = "computer";
    }
    if(playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        winner = "computer";
    }
    if(playerSelection == "Scsissors" && computerSelection == "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        winner = "player";
    }

    return winner;

}

function game() {

    let playerScore = 0;
    let computerScore = 0;

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        if(winner == "player") playerScore++;
        if(winner == "computer") computerScore++;

        console.log(`Player ${playerScore} - ${computerScore} Computer`);

    if(playerScore == computerScore) console.log("Draw. Maybe you should try again.")
    if(playerScore > computerScore) console.log("You are the winner! Congratulations.");
    if(computerScore > playerScore) console.log("You lost. Better luck next time.")

}