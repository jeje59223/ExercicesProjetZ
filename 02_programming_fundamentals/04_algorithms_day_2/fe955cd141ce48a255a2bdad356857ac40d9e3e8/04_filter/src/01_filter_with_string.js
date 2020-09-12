function filter(array, str) {
  // Your code here
  const tab = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0 && str === "pair"){
      tab.push(array[i]);
    } else if(str === "impair" && array[i] % 2 !== 0){
      tab.push(array[i]);
    } else {
      "Cas non pris en charge !";
    }
  }
  return tab;
}
const tableau = [1,2,3,4];
console.log(filter(tableau,"pair"));

// do not remove this line, it is for tests
module.exports = filter;
