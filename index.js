// Randomly Return either Rock Paper or Scissors
function computerPlay() {
  // define three options or one object? one array?
  let playOptions = ["rock", "paper", "scissors"];
  // randomly return number between 1-3
  let playChoice = playOptions[Math.floor(Math.random() * 3)]
  // console results
  console.log(playChoice);
}

computerPlay();
