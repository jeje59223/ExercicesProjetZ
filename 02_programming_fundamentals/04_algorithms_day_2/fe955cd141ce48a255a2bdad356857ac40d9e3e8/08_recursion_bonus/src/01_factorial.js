function fact(n) {
  // your code here
  let fact = 1;
  for(let i = 1; i <= n; i++){
    fact = fact * i;
  }
  if(n >= 0){
    return fact;
  } else {
    return null;
  }
}

console.log(fact(-4));

// do not remove this line, it is for tests
module.exports = fact;
