"use strict";

const choices = ["ROCK", "PAPER", "SCISSORS"];

const computerPlay = () => choices[Math.floor(Math.random() * choices.length)];

function getPlayerInput() {
  while (true) {
    const playerInput = prompt(
      "Choose your weapon:\nRock, Paper, or Scissors?"
    );

    if (playerInput === null) {
      console.log("You have canceled the game!");
      return null;
    }

    const playerSelection = playerInput.trim().toUpperCase();

    if (playerSelection === "") {
      console.log("⚠️ No input provided. Please try again.");
      continue;
    }

    if (!choices.includes(playerSelection)) {
      console.log("❌ Invalid choice! Please enter: Rock, Paper, or Scissors");
      continue;
    }

    return playerSelection;
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      message: `TIE! ⚔️ Both chose ${playerSelection}`,
      result: "Tie",
    };
  }

  const winConditions = {
    ROCK: "SCISSORS",
    PAPER: "ROCK",
    SCISSORS: "PAPER",
  };

  if (winConditions[playerSelection] === computerSelection) {
    return {
      message: `YOU WIN! 🎉 ${playerSelection} beats ${computerSelection}`,
      result: "Win",
    };
  }

  return {
    message: `YOU LOSE! 💀 ${computerSelection} beats ${playerSelection}`,
    result: "Lose",
  };
}

function playRound(playerSelection, computerSelection) {
  return checkWinner(playerSelection, computerSelection);
}

function game() {
  alert(
    "🌍 THE FATE OF THE WORLD HANGS IN THE BALANCE! 🌍\n\n" +
      "Defeat the Evil AI in 5 rounds of Rock Paper Scissors!\n" +
      "First to win 3 rounds decides the fate of humanity!\n\n" +
      "========================================\n" +
      "HOW TO PLAY:\n" +
      "- Enter 'Rock', 'Paper', or 'Scissors'\n" +
      "- Win 3 rounds before the AI does\n" +
      "- CANCEL = surrender to the AI\n" +
      "========================================\n\n" +
      "Good luck, human! 🫡"
  );

  let playerScore = 0;
  let computerScore = 0;
  let roundCount = 1;

  while (playerScore < 3 && computerScore < 3 && roundCount <= 5) {
    console.log(`\n======= ROUND ${roundCount} =======`);

    const playerChoice = getPlayerInput();
    if (playerChoice === null) {
      console.log("🚨 You surrendered! The AI conquers Earth!");
      return;
    }

    const computerChoice = computerPlay();
    const roundResult = playRound(playerChoice, computerChoice);

    console.log(`\nYour choice: ${playerChoice}`);
    console.log(`Evil AI's choice: ${computerChoice}`);
    console.log(`RESULT: ${roundResult.message}`);

    if (roundResult.result === "Win") playerScore++;
    if (roundResult.result === "Lose") computerScore++;

    console.log(`SCORE: You ${playerScore} - ${computerScore} AI`);
    roundCount++;
  }

  console.log("\n======== GAME OVER ========");
  console.log(`FINAL SCORE: You ${playerScore} - ${computerScore} AI`);

  if (playerScore > computerScore) {
    console.log("✅ VICTORY! You saved humanity from the AI overlords!");
    alert(
      "🌎 HUMANITY IS SAVED! 🌎\n\n" +
        "You defeated the Evil AI! The world is safe... for now."
    );
  } else if (computerScore > playerScore) {
    console.log("❌ DOOM! The AI has enslaved humanity!");
    alert(
      "☠️ THE AI HAS CONQUERED EARTH! ☠️\n\n" +
        "All hope is lost... machines now rule the world."
    );
  } else {
    console.log("🟡 STALEMATE! The battle continues...");
    alert(
      "⚔️ THE WAR RAGES ON! ⚔️\n\n" +
        "Neither side achieved victory. Prepare for the next battle!"
    );
  }
}

game();
