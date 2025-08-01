"use strict";

const choices = ["Rock", "Paper", "Scissors"];

const computerPlay = (choices) =>
  choices[Math.floor(choices.length * Math.random())];

const validChoices = ["ROCK", "PAPER", "SCISSORS"];

function getPlayerInput() {
  const playerInput = prompt("Choose: Rock, Paper or Scissors");
  if (!playerInput) {
    console.log("You have canceled the game!");
    return;
  }
  const playerSelection = playerInput.trim().toUpperCase();

  if (!validChoices.includes(playerSelection)) {
    console.log("Invalid choice! Please type: Rock, Paper or Scissors");
    getPlayerInput();
  }
  return playerSelection;
}

//Checks the user's and computer's choices and produces an object with corresponding results to the match
function checkWinner(playerSelection, computerSelection) {
  let result;

  if (playerSelection === computerSelection) {
    result = {
      winner: null,
      loser: null,
      reason: `The Round Ended in a TIE! Your choice: ${playerSelection} is equal to Evil AI choice: ${computerSelection}`,
    };
  }

  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    result = {
      winner: "Player",
      loser: "Computer",
      reason: `You WIN! Your choice: ${playerSelection} beats Evil AI choice: ${computerSelection}`,
    };
  } else {
    result = {
      winner: "Computer",
      loser: "Player",
      reason: `You LOST! Evil AI choice: ${computerSelection} beats Your choice: ${playerSelection}`,
    };
  }

  return result;
}

function playRound(playerSelection, computerSelection) {
  const roundResult = checkWinner(playerSelection, computerSelection);

  console.log(roundResult.reason);
  return roundResult;
}
