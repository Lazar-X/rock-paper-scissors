window.onload = function() {

    console.log("connected");

    computerPlay();
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