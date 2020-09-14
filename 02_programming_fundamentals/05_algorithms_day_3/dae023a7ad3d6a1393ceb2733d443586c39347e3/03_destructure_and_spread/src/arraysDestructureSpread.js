function arrayCrusher(firstArray, secondArray) {
  // code here
  const array = [...firstArray, ...secondArray];
  return array;
}

function recursiveBouncer(list) {
  // code here
  if(list.length === 0){
    return;
  }
  const [head, ...tail] = list;
  console.log(head);
  recursiveBouncer(tail);
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
