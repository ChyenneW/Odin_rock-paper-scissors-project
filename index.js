const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDispay = document.getElementById('user-choice');
const result = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
const computerScoreDisplay = document.getElementById('computer-score');
const userScoreDispay = document.getElementById('player-score');

let computerChoice;
let playersChoice;

// Randomly Return either Rock Paper or Scissors
function computerPlay() {
  // define three options or one object? one array?
  let playOptions = ["rock", "paper", "scissors"];
  // randomly return number between 1-3
  computerChoice = playOptions[Math.floor(Math.random() * 3)]
  // return computer's choice
  console.log(computerChoice);
  return computerChoice;
}

function playersPlay() {
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playersChoice = e.target.id
    userChoiceDispay.innerHTML = playersChoice;
    // Displays the results from computerPlay on the html
    computerChoiceDisplay.innerHTML = computerPlay();
    result.innerHTML = gameResults(computerChoice, playersChoice);
  }))

}



// Play round between computer and player
function gameResults(computerChoice, playersChoice) {
  // take computerPlay and playersPlay
  let computer = computerChoice;
  let player = playersChoice;
  console.log(`choice is ${computer}, ${player}`);
  // let victor = ["computerWon", "playerWon", "tie"];
  console.log(computer);
  console.log(player);

  // Compare computerPlay and playersPlay
  if (computer === undefined || player === undefined) {
    return result.innerHTML = " ";
  } else if (computer === player) {
    return result.innerHTML = "Its a tie!!";
    // gameScore(victor[2]);

  } else if (computer == "rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper") {
    return result.innerHTML = `You lose! ${computer} beats ${player}.`;
    // gameScore(victor[0]);

  } else {
    return result.innerHTML = `You win! ${player} beats ${computer}.`;
    // gameScore(victor[1]);
  }
}

playersPlay();