window.onload = function() {

    console.log("connected");

    game();
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

    console.log(`You choosed ${playerSelection}. Computer choosed ${computerSelection}.`);

    if(playerSelection == computerSelection) {
        console.log(`Draw! ${playerSelection} cant beat ${computerSelection}.`);
        
    }
    if(playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
    if(playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }
    if(playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    if(playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    if(playerSelection == "Scsissors" && computerSelection == "Paper") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    }

}

function game() {

    let playerScore;
    let computerScore;

    for(let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

}