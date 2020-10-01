import readline from "readline";
import recursiveCalculator from "./recursiveCalculator.js";
import simpleCalculator from "./simpleCalculator.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// calculator(reader);
console.log("Which calculator do you want to use?");
console.log("1 - with error handling");
console.log("2 - without error handling");
reader.question("> ", (input) => {
  if (input === "1") {
    recursiveCalculator(reader);
  } else if (input === "2") {
    simpleCalculator(reader);
  }
});