function filter(array,fn) {
  // Your code here
  const tab = [];

  for(let i = 0; i < array.length; i++){
    if(fn(array[i])){
      tab.push(array[i]);
    }
  }
  return tab;
}

function pickEvenNumbers(numbers){
  numbers = [];
  const result = numbers.filter(number => number % 2 === 0);
}




console.log(filter([1, 2, 3, 4, 5], pickEvenNumbers)); // [2, 4];

// do not remove this line, it is for tests
module.exports = filter;
