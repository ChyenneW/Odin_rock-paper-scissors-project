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
    return victor[2];
  } else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
    alert(`You lose! ${computer} beats ${player}.`);
    return victor[0];
  } else {
    alert(`You win! ${player} beats ${computer}.`);
    return victor[1];
  }
}

// Play 5 rounds of game
function game() {
  for (let index = 0; index < 5; index++) {
    let victor = gameRound();

    // track winner for each round
    let computerScore = 0;
    let playerScore = 0;
    if (victor === "computerWon") {
      computerScore++;
      console.log(computerScore);
    } else if (victor === "playerWon") {
      playerScore++;
      console.log(playerScore);
    }


    // return total points


    // incruments roun number
    index;
  }
}

game();
// return winner


