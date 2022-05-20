window.onload = function() {

    console.log("connected");

    // computerPlay();
    playerPlay();
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

    console.log(computerChoice);
}

function playerPlay() {

    let playerChoice = prompt("Choose between rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase() + " ";
    let playerChoiceNew = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1, playerChoice.indexOf(" ") + 1);
    playerChoiceNew = playerChoiceNew.trim();

    console.log(playerChoiceNew);

    if((playerChoiceNew !== "Rock") && (playerChoiceNew !== "Paper") && (playerChoiceNew !== "Scissors")) {
        console.log("Remember you can choose rock, paper or scissors only!");
    }

    else {
        console.log("You choosed " + playerChoiceNew);
    }
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection) {

    }

}