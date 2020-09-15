

function numberGame(reader, min = 1, max = 100) {
  // code here
  const numberSecret = Math.round(Math.random() * (max - min) + min);
  console.log(numberSecret);
  let question = "Enter a number : \n";
  const startGame = () => {
    reader.question(question, (number) => {
      if(isNaN(number)){
        question = `${number} is not a number ! \n`;
        startGame();
      } else if(number < min || number > max){
        question = `The number is between ${min} and ${max} \n`;
        startGame();
      } else if(number < numberSecret){
        question = "too low \n";
        startGame();
      } else if( number > numberSecret){
        question = "too high \n";
        startGame();
      } else {
        console.log("You won! \n");
        reader.close();
      }
    });
  };
  startGame();
}

module.exports = numberGame;
