// Modify this value to test with other values
const numberOfLine = 5;
// Your code here ⬇
let numbers = "";

for(let i = numberOfLine; i > 0; i--){
  numbers += i;
}

for(let i = numberOfLine; i > 0; i --){
  console.log(numbers.slice(0, i));
}
