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

// console.log(range(1,5));

// Do not remove last lines, it is for tests
module.exports = range;
