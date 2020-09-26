function fizzBuzz(list){
  let newTab = [];

  newTab = list.map (i => 
    (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" : 
      (i % 3 === 0) ? "Fizz" :
        (i % 5 === 0) ? "Buzz" : i);
  return newTab;
}

const tab = [1,2,3,4,5,6,7,8,9,15,150,3];
console.log(fizzBuzz(tab));

// Leave the line below for tests to work properly.
module.exports = fizzBuzz;
