import affichagePageAccueil from "./affichagePageAccueil.js";
import readline from 'readline';

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// loyaltyCardManager(reader);

console.log(affichagePageAccueil.menu(reader));
affichagePageAccueil.chooseAnAction(reader);



