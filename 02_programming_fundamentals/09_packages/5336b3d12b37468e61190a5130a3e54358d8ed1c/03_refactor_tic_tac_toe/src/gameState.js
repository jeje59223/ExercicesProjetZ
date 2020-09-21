// partager le code nécessaire

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null),
};

let currentPlayer;

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;
  
  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

module.exports = { updateState, getCoordinate, currentPlayer, state };
