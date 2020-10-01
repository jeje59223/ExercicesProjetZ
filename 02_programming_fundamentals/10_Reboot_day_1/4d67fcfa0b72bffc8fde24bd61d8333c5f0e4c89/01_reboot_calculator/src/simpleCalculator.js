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
  
  export default function (reader) {
    const operators = ["+", "-", "*", "/"];
  
    console.log("Ready to compute operations!");
    console.log("****************************\n");
  
    reader.question("Enter the first number\n> ", (firstInput) => {
      reader.question(`Choose an operation: [ ${operators.join(" ")} ]\n> `, (operation) => {
        reader.question("Enter the second number\n> ", (secondInput) => {
          const a = numberCheck(firstInput);
          const b = numberCheck(secondInput);
          let result;
          switch (operation) {
            case "+":
              result = a + b;
              break;
            case "-":
              result = a - b;
              break;
            case "*":
              result = a * b;
              break;
            case "/":
              if (b !== 0) {
                result = a / b;
              } else {
                console.log("Only Chuck Norris can divide by zero !");
              }
              break;
            default:
              console.log("Unknown operation.. ");
              console.log("Enter a valid command [ + | - | * | / ]");
              reader.close();
          }
          if (result) {
            console.log(`\n${a} ${operation} ${b} = ${result}`);
            reader.close();
          }
        });
      });
    });
  }