// ❓ Description

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ✅ Solution

const rps = (p1, p2) => {
  winCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };
  return (p1 === p2) ? "Draw!" :
    winCombinations[p1] === p2 ?
    "Player 1 won!" : "Player 2 won!";
}

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "rock"));
console.log(rps("rock", "rock"));