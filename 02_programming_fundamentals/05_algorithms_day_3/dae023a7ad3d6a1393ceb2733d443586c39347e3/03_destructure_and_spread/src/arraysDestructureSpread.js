function arrayCrusher(firstArray, secondArray) {
  // code here
  const array = [...firstArray, ...secondArray];
  return array;
}

function recursiveBouncer(list) {
  // code here
  const array = [...list];
  console.log(array);
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
