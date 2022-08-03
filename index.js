const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDispay = document.getElementById('user-choice');
const result = document.getElementById('results');

const possibleChoices = document.querySelectorAll('button');

let computerChoice;
let playersChoice;

// Randomly Return either Rock Paper or Scissors
function computerPlay() {
  // define three options or one object? one array?
  let playOptions = ["rock", "paper", "scissors"];
  // randomly return number between 1-3
  computerChoice = playOptions[Math.floor(Math.random() * 3)]
  // return computer's choice
  return computerChoice;
}

function playersPlay() {
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playersChoice = e.target.id
    userChoiceDispay.textContent = playersChoice;
    // Displays the results from computerPlay on the html
    computerChoiceDisplay.textContent = computerPlay();
    result.textContent = gameResults(computerChoice, playersChoice);
  }))

}

let playersPoint = 0;
let computersPoint = 0;
let playersScore = document.getElementById('playersScore');
let computersScore = document.getElementById('computersScore');

// Play round between computer and player
function gameResults(computerChoice, playersChoice) {
  // take computerPlay and playersPlay
  let computer = computerChoice;
  let player = playersChoice;

  // Compare computerPlay and playersPlay
  if (computer === undefined || player === undefined) {
    return result.textContent = " ";
  } else if (computer === player) {
    return result.textContent = "Its a tie!!";
  } else if (computer == "rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper") {
    computersPoint++
    computersScore.textContent = computersPoint;
    gameScore(computersPoint, playersPoint);
    return result.textContent = `You lose! ${computer} beats ${player}.`;
  } else {
    playersPoint++
    playersScore.textContent = playersPoint;
    gameScore(computersPoint, playersPoint);
    return result.textContent = `You win! ${player} beats ${computer}.`;
  }
}

function gameScore(computersPoint, playersPoint) {
  let forComputer = computersPoint;
  let forPlayer = playersPoint;

  if (forComputer === 5) {
    alert("Computer Won!!");
    playersPoint = 0;
    playersScore.textContent = 0;
    computersPoint = 0;
    computersScore.textContent = 0;
  } else if (forPlayer === 5) {
    alert("Computer Won!!");
    playersPoint = 0;
    playersScore.textContent = 0;
    computersPoint = 0;
    computersScore.textContent = 0;
  } else {
    null
  }
}

playersPlay();