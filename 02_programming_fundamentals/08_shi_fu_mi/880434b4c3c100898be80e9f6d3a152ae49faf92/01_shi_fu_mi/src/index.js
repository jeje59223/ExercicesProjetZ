const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");


const moves = {
  // ROCK
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],

  // PAPER
  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],

  // SCISSORS
  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};



// Fonction pour générer un nombre aléatoire entre 0 et 2
const shotCPU = () => {
  return Math.floor(Math.random() * 3);
};

// Fonction pour inverser le symbol
const reverseLine = (line) => {
  const changedLine = line
    .split("") // met dans un tableau
    .map((char) => {
      // on copie le tableau
      if (char === ")") {
        return "(";
      } else if (char === "(") {
        return ")";
      }
      return char;
    })
    .join("");
  return changedLine.split("").reverse().join("");
};

// fonction de vérification pour savoir qui gagne
function comparer(move, moveAi) {
    if (move === moveAi) {
      console.log("********** Egalité **********");
      console.log("---------------------------------------------");
    } else if (
      (move === "rock" && moveAi === "scissors") ||
      (move === "paper" && moveAi === "rock") ||
      (move === "scissors" && moveAi === "paper")
    ) {
      console.log("********** Player 1 GAGNE **********");
      console.log("---------------------------------------------");
    } else if (
      (move === "papper" && moveAi === "scissors") ||
      (move === "rock" && moveAi === "paper") ||
      (move === "scissors" && moveAi === "rock")
    ) {
      console.log("********** CPU GAGNE **********");
      console.log("---------------------------------------------");
    }
  }

// fonction pour redémarrer le jeu
function restartGame(){
    reader.question("Play again ? Y / n\n> ", (res) => {
        if(res.toLowerCase() === 'y'){
            startGame();
        } else if(res.toLowerCase() === "n"){
            console.log("A bientôt");
            reader.close();
        } else {
            console.log("Veuillez répondre par Y ou n");
            restartGame();
        }
    });
}

// // fonction menu choix de l'adversaire
// function choiseOpponent(){
//     reader.question("Choose your Opponent :\n> 1 - Player 2\n> 2 - Ordinateur\n> ", (choise) => {

//         if(Number(choise) === 1){
//             startGame();
//         } else if(Number(choise) === 2){
//             startGame();
//         } else {
//             console.log("Cet adversaire n'existe pas !");
//             choiseOpponent();
//         }
//     })
// }

// // fonction 2 players
// function GameWith2Players(){
//     reader.question("Please choose a move\nPlayer 2 > ", (playerTwo) => {
//         const indice = Number(playerTwo - 1);
//         const move = Object.keys(moves)[indice]; // on récupère la clé du symbol
//         const shotPlayerTwo = moves[move]; // on récupère la valeur
//         return shotPlayerTwo;
//     })
// }

// // fonction CPU
// function GameWithCPU(){
//     const moveAi = Object.keys(moves)[shotCPU()];
//     const shotAi = moves[moveAi].map(reverseLine);
//     console.log(shotAi);
//     return shotAi;
//}

// JEU
clear();
console.log("Welcome to ShiFuMi");
Object.keys(moves).forEach((move, index) => {
console.log(`${index + 1} - ${move}`);
});

function startGame() {

    reader.question("Please choose a move\nPlayer 1 > ", (playerOne) => {
    // Handle the move

    // Player 1
    const indice = Number(playerOne - 1); // on récupère la saisie du player
    const move = Object.keys(moves)[indice]; // on récupère la clé du symbol
    const shotPlayerOne = moves[move]; // on récupère la valeur

    if (indice === 0 || indice === 1 || indice === 2) {
      // CPU
      const moveAi = Object.keys(moves)[shotCPU()];
      const shotAi = moves[moveAi].map(reverseLine);

      // Player 2
      // reader.question("Please choose\nPlayer 2 > ", (playerTwo) => {
      //     const indice = Number(playerTwo - 1); // on récupère la saisie du player
      //     const move = Object.keys(moves)[indice]; // on récupère la clé du symbol
      //     const shotPlayerTwo = moves[move]; // on récupère la valeur
      console.log("---------------------------------------------");  
      console.log(`Player 1 \n${shotPlayerOne.join("\n")}`);
      console.log("---------------------------------------------");
      console.log(`CPU \n${shotAi.join("\n")}`);
      console.log("---------------------------------------------");
      
      comparer(move, moveAi);
      restartGame();
      // console.log(shotPlayerTwo.join("\n"));

    //   reader.close();
      // });
    } else {
      clear();
        console.log("Veuillez entrer un nombre entre 1 et 3");
        Object.keys(moves).forEach((move, index) => {
        console.log(`${index + 1} - ${move}`);
        });
      startGame();
    }
  });
}
startGame();

