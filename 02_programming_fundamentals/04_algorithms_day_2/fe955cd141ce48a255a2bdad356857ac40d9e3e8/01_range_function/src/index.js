function range(nb1, nb2) {
  // Code the function here.
  const newTab = [];
  if(nb1 < nb2){
    for(let i = nb1; i <= nb2; i++){
      newTab.push(i);
    }
  } else {
    for(let i = nb1; i >= nb2; i--){
      newTab.push(i);
    }
  }
  return newTab;
}

const ascArray = range(11,11);
const descArray = range(5,1);

console.log(ascArray, descArray);

// Do not remove last lines, it is for tests
module.exports = range;
