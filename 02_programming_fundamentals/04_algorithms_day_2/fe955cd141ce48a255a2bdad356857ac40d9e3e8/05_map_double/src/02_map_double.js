function double(nb) {
  // Code your function here.
  return nb * 2;
}

const tableau = [1, 2, 3, 4];

function map(tab, fonction) {
  // Code your function here.
  const newTab = [];

  for(let i = 0; i < tab.length; i++){
    newTab.push(fonction(tab[i]));
  }
  return newTab;
}

console.log(map(tableau, double));

// Do not remove last lines, it is for tests
module.exports = { double: double, map: map };
