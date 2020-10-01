const operators = ["+", "-", "*", "/"];

function numberCheck(input) {
  const correctedInput = input.replace(",", ".");
  const floatInput = parseFloat(correctedInput);
  if (Number.isNaN(floatInput)) {
    return null;
  } else if (floatInput === Infinity) {
    return null;
  } else {
    return floatInput;
  }
}

let firstNumber;
let secondNumber;
let internalReader;

const getOperator = () => {
  internalReader.question(`Choose an operation: [ ${operators.join(" ")} ]\n> `, (operation) => {
    let result;
    switch (operation) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber !== 0) {
          result = firstNumber / secondNumber;
        } else {
          console.log("Only Chuck Norris can divide by zero !");
        }
        break;
      default:
        console.log("Unknown operation.. ");
        console.log("Enter a valid command [ + | - | * | / ]");
        getOperator();
    }
    if (result) {
      console.log(`\n${firstNumber} ${operation} ${secondNumber} = ${result}`);
      internalReader.close();
    }
  });
};

const getNthNumber = (nth) => {
  internalReader.question(`Waiting for ${nth} number\n> `, (input) => {
    const number = numberCheck(input);
    if (!number) {
      console.log("Wrong input!");
      getNthNumber(nth);
    }
    if (number && !firstNumber) {
      firstNumber = number;
      getNthNumber("second");
    } else if (number && firstNumber && !secondNumber) {
      secondNumber = number;
      getOperator();
    }
  });
};

export default function calculator(reader) {
  internalReader = reader;
  getNthNumber("first");
}