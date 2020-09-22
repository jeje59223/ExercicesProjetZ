import readline from "readline";
import calculator from "./calculator.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// fonction pour vérifier l'opérateur
function operationVerication(operation){
  if(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/"){
    console.log("Unknown operation..");
  }
}
// fonction pour vérifier si c'est un nombre
function numberVerification(number){
  if(isNaN(number)){
    console.log("Wrong input!");
    numberOne()
  }
}

// fonction pour continuer les calculs
function restart(){
  reader.question("Do you want continue ? (Y, n)\n> ", (saisie) => {
    if(saisie.toLowerCase() === "y"){
      startCalculator();
    } else {
      console.log("A bientôt !");
      reader.close();
    }
  });
}

// choix firstNumber
function numberOne(){
  reader.question("Enter the first number\n> ", (firstNumber) => {
    numberVerification(firstNumber);
    return firstNumber;
  });
};

// choix secondNumber
function numberTwo(){
  reader.question("Enter the first number\n> ", (secondNumber) => {
    numberVerification(secondNumber);
    return secondNumber;
  });
}

function startCalculator(){
  console.log("\nReady to compute operations\!\n****************************\n");
  //reader.question("Enter the first number\n> ", (firstNumber) => {
    //numberVerification(firstNumber);
    numberOne();
    //reader.question("Choose an operation: [ + - * / ]\n> ", (operation) => {
      //operationVerication(operation);
      numberTwo();
      reader.question("Enter the second number\n> ", (secondNumber) => {
        numberVerification(secondNumber);
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
          if(operation === "+"){
            console.log(`${firstNumber} + ${secondNumber} = ${calculator.addition(firstNumber, secondNumber)}`);
          } else if(operation === "-"){
            console.log(`${firstNumber} - ${secondNumber} = ${calculator.subtraction(firstNumber, secondNumber)}`);
          } else if(operation === "/"){
            console.log(`${firstNumber} / ${secondNumber} = ${calculator.division(firstNumber, secondNumber)}`);
          } else if(operation === "*"){
            console.log(`${firstNumber} x ${secondNumber} = ${calculator.multiplication(firstNumber, secondNumber)}`);
          }
          restart(reader);
        });
      //});
    //});
}

startCalculator();

// calculator(reader);
