const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDispay = document.getElementById('user-choice');
const result = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
const computerScoreDisplay = document.getElementById('computer-score');
const userScoreDispay = document.getElementById('player-score');

let userChoice

// Randomly Return either Rock Paper or Scissors
function computerPlay() {
  // define three options or one object? one array?
  let playOptions = ["rock", "paper", "scissors"];
  // randomly return number between 1-3
  let playChoice = playOptions[Math.floor(Math.random() * 3)]
  // return computer's choice
  return playChoice;
}

function playersPlay() {
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDispay.innerHTML = userChoice
    // Displays the results from computerPlay on the html
    computerChoiceDisplay.innerHTML = computerPlay()

    let playersChoice = userChoice
    return playersChoice
  }))
}
