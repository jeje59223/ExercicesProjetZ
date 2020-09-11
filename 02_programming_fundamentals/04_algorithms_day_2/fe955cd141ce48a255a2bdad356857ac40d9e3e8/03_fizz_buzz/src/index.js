function fizzBuzz(numbers) {
  // Code the function here.
  const newTab = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
      newTab.push("FizzBuzz");
    } else if(numbers[i] % 3 === 0){
      newTab.push("Fizz");
    } else if(numbers[i] % 5 === 0){
      newTab.push("Buzz");
    } else {
      newTab.push(numbers[i]);
    }
  }
  return newTab;
}
console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
