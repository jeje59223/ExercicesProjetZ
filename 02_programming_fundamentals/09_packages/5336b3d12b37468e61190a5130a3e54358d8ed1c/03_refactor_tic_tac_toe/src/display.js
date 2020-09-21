// ici les fichiers pour l'affichage

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}
  
function renderRow(letter, state) {
  const cells = state[letter];
  
  const row = cells.map(renderCell).join(" | ");
  
  return `${letter} ${row}`;
}
  
function renderBoard(state) {
  const letters = Object.keys(state);
  
  const rows = letters.map((letter) => renderRow(letter, state)).join("\n");
  
  const header = "  1   2   3";
  
  return `${header}\n${rows}`;
}

module.exports = { renderBoard, renderCell, renderRow, };
