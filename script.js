const myArray = ["Rock", "Paper", "Scissors"];
let PlayerSelection = prompt("Rock, Paper or Scissors").toUpperCase;
let ComputerSelection = getComputerChoice();

let PlayerScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(PlayerSelection,ComputerSelection) {
    PlayerSelection = prompt("Rock, Paper or Scissors");
    ComputerSelection = getComputerChoice();
    if (PlayerSelection === "Rock" && (ComputerSelection === "Scissors")) {
        PlayerScore += 1;
        return console.log("You Win !");
    }
    else if (PlayerSelection === "Paper" && (ComputerSelection === "Rock")) {
        PlayerScore += 1;
        return console.log("You win");
    }
    else if (PlayerSelection === "Scissors" && (ComputerSelection === "Paper")) {
        PlayerScore += 1;
        return console.log("You win");
    }    
    else if (PlayerSelection === "Scissors" && (ComputerSelection === "Rock")) {
        ComputerScore += 1;
        return console.log("Computer Wins!");
    }
    else if (PlayerSelection === "Rock" && (ComputerSelection === "Paper")) {
        ComputerScore += 1;
        return console.log("Computer Wins!");
    }
    else if (PlayerSelection === "Scissors" && (ComputerSelection === "Paper")) {
        ComputerScore += 1;
        return console.log("Computer Wins!");
    }
    else {
        return console.log("It is a tie!");
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(PlayerSelection, ComputerSelection);      
     }
    if (ComputerScore > PlayerScore) {
        console.log('Computer Won the Game!');
    }
    else if (PlayerScore > ComputerScore) {
        console.log('You WON!');
    }
    else {
        console.log('it is a tie');
    }
}
game();