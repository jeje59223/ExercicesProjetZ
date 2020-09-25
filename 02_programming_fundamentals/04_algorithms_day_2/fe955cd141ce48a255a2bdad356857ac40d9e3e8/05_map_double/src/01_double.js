function double(tab) {
  // Code your function here.
  let tableau = [];
  for(let i = 0; i < tab.length; i++){
    tableau.push(tab[i] * 2);
  }
  return tableau;
}

// Do not remove last lines, it is for tests
module.exports = double;
