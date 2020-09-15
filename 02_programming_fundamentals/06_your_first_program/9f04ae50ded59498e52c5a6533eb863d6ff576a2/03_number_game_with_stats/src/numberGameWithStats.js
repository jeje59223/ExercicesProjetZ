function numberGameWithStats(reader, min = 1, max = 100) {
  // Code here
  const numberSecret = Math.round(Math.random() * (max - min) + min);
  console.log(numberSecret);
  let question = "Enter a number : \n";
  let nombreDeCoups = 0;
  let coupsRestant = 10;
  const startGame = () => {
    reader.question(question, (number) => {
      if(isNaN(number)){
        question = `${number} is not a number ! \n`;
        nombreDeCoups++;
        coupsRestant--;
        console.log(`Il te reste ${coupsRestant} coups`);
        startGame();
      } else if(coupsRestant === 1){
        console.log("You lOOOOOOOOOSE !!!!!!!");
        reader.close();
      } else if(number < min || number > max){
        question = `The number is between ${min} and ${max} \n`;
        nombreDeCoups++;
        coupsRestant--;
        console.log(`Il te reste ${coupsRestant} coups`);
        startGame();
      } else if(number < numberSecret){
        nombreDeCoups++;
        coupsRestant--;
        console.log(`Il te reste ${coupsRestant} coups`);
        question = "too low \n";
        startGame();
      } else if( number > numberSecret){
        question = "too high \n";
        nombreDeCoups++;
        coupsRestant--;
        console.log(`Il te reste ${coupsRestant} coups`);
        startGame();
      } else {
        console.log("You won!");
        nombreDeCoups++;
        if(nombreDeCoups === 1){
          console.log(`Magnifique vu ta chance tu es cocu ! Vous avez gagné avec ${nombreDeCoups} coups`);
        } else {
          console.log(`Bravo ! Vous avez gagné avec ${nombreDeCoups} coups`);
        }
        reader.close();
      }
    });
  };
  startGame();
}

module.exports = numberGameWithStats;
