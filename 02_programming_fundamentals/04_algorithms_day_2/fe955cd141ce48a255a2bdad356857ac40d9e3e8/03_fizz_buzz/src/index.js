function fizzBuzz(numbers) {
  // Code the function here.
  const newTab = [];
  let IsFizzBizz = "";
  for(let i = 0; i < numbers.length; i++){
    const valeur = numbers[i];
    if(valeur % 3 === 0 && valeur % 5 === 0){
      IsFizzBizz = "FizzBuzz";
    } else if(valeur % 3 === 0){
      IsFizzBizz = "Fizz";
    } else if(valeur % 5 === 0){
      IsFizzBizz = "Buzz";
    } else {
      IsFizzBizz = valeur;
    }
    newTab.push(IsFizzBizz);
  }
  return newTab;
}
console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
