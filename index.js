const computerChoice = document.getElementById('computer-choice');
const UserChoice = document.getElementById('user-choice');
const result = document.getElementById('result');


// Randomly Return either Rock Paper or Scissors
function computerPlay() {
  // define three options or one object? one array?
  let playOptions = ["rock", "paper", "scissors"];
  // randomly return number between 1-3
  let playChoice = playOptions[Math.floor(Math.random() * 3)]
  // return computer's choice
  return playChoice;
}


// Takes players play selection
function playersPlay() {
  // prompt for selection
  let playersChoice = prompt("Rock, Paper, or Scissors?");
  // correct selection case size
  playersChoice = playersChoice.toLowerCase();
  // return player's choice 
  return playersChoice;
}

// track winner for each round
function gameScore(victor) {
  let computerScore = 0;
  let playerScore = 0;
  if (victor === "computerWon") {
    computerScore++;
    console.log(computerScore);
  } else if (victor === "playerWon") {
    playerScore++;
    console.log(playerScore);
  }
}


// Play round between computer and player
function gameRound() {
  // take computerPlay and playersPlay
  let computer = computerPlay();
  let player = playersPlay();
  let victor = ["computerWon", "playerWon", "tie"];
  console.log(computer);
  console.log(player);

  // Compare computerPlay and playersPlay
  if (computer === player) {
    alert("Its a tie!!");
    gameScore(victor[2]);

  } else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
    alert(`You lose! ${computer} beats ${player}.`);
    gameScore(victor[0]);

  } else {
    alert(`You win! ${player} beats ${computer}.`);
    gameScore(victor[1]);
  }
}



// Play 5 rounds of game
function game() {
  for (let index = 0; index < 5; index++) {
    gameRound();
    // round number
    index;
  }
}


game();

// return total points
// return winner

