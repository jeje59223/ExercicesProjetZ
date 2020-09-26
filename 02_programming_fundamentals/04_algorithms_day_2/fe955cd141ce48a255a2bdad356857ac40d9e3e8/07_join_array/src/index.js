function joinArray(tab, separator) {
  // Code your function here.
  return tab.reduce(function(accumulator, currentValue){
    return accumulator + separator + currentValue;
  });
  
}
const tab = ["zero", "one", "two", "four", "five", "six"];
console.log(joinArray(tab, " - "));

// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
