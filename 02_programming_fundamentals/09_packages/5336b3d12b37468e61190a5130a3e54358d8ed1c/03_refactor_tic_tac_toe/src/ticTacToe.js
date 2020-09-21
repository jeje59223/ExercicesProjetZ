// fichier qui doit exporter le game
const readline = require("readline");
const gameState = require("./gameState");
const display = require("./display");
const utilities = require("./utilities");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const WINNING_COORDINATES = [
  [
    { letter: "a", digit: "0" },
    { letter: "a", digit: "1" },
    { letter: "a", digit: "2" },
  ],
  [
    { letter: "b", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "b", digit: "2" },
  ],
  [
    { letter: "c", digit: "0" },
    { letter: "c", digit: "1" },
    { letter: "c", digit: "2" },
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "2" },
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "0" },
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "0" },
    { letter: "c", digit: "0" },
  ],
  [
    { letter: "a", digit: "1" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "1" },
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "2" },
    { letter: "c", digit: "2" },
  ],
];

function handleInput(input) {
  const coordinate = gameState.getCoordinate(input);
  if (coordinate) {
    gameState.updateState(coordinate);
    if (hasWinner()) {
      console.log(display.renderBoard(gameState.state));
      console.log(`Congratulations ${gameState.currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished(gameState.state)) {
      console.log(display.renderBoard(gameState.state));
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      nextPlayer();
      playTurn();
    }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

function nextPlayer() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}

function playTurn() {
  console.log(display.renderBoard(gameState.state));
  reader.question(`${gameState.currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function hasWinner() {
  const isWinningLine = (line) => {
    const pattern = line.map((coordinate) => gameState.state[coordinate.letter][coordinate.digit]).join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return WINNING_COORDINATES.some(isWinningLine);
}

function gameIsFinished(state) {
  const allValues = utilities.flattenArray(Object.values(gameState.state));

  return allValues.every(utilities.isNotNull);
}

function start() {
  gameState.currentPlayer = ["X", "O"][Math.round(Math.random())];
  
  playTurn();
}

start();

module.exports = { start };