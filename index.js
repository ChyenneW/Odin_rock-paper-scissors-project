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
  console.log(computer);
  console.log(player);

  // compare computerPlay and playersPlay
  if (computer === player) {
    alert("Its a tie!!");
  } else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
    alert(`You lose! ${computer} beats ${player}.`);
  } else {
    alert(`You win! ${player} beats ${computer}.`);
  }
}


gameRound();
