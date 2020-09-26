function fibo(n) {
  // your code here
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fib.push(fib[i]);
  }
  let nb1 = fib[Number(fib.length -1)];
  let nb2 = fib[Number(fib.length -3)];
  if(n > 0){
    return nb1 + nb2;
  } else if (n === 0){
    return 0;
  } else {
    return null;
  }
}
//console.log(fibo(10));

// do not remove this line, it is for tests
module.exports = fibo;
