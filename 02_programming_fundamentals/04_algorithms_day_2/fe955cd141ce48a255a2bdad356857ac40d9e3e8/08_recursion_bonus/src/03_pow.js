function pow(number, power) {
  // Your code here
  let result = 1;
  for(let i = 1; i <= power; i++){
    result = result * number;
  }
  return result;
  //return Math.pow(number, power);
}

// console.log(pow(2,5));

// do not remove this line, it is for tests
module.exports = pow;
