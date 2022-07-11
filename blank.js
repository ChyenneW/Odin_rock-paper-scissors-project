
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
function gameRound(computerChoice, playersChoice) {
    // take computerPlay and playersPlay
    let computer = computerChoice;
    let player = playersChoice;
    // let victor = ["computerWon", "playerWon", "tie"];
    console.log(computer);
    console.log(player);

    // Compare computerPlay and playersPlay
    if (computer === player) {
        result.innerHTML = "Its a tie!!";
        // gameScore(victor[2]);

    } else if (computer === "rock" && player === "scissors" || computer === "paper" && player === "rock" || computer === "scissors" && player === "paper") {
        result.innerHTML = `You lose! ${computer} beats ${player}.`;
        // gameScore(victor[0]);

    } else {
        result.innerHTML = `You win! ${player} beats ${computer}.`;
        // gameScore(victor[1]);
    }
}


// return total points
// return winner
