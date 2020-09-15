const readline = require("readline");
const clear = require("./clear");

const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

 // console.log({...symbols})
 // console.log(symbols);
let tabSymbols = [];

for(const element in symbols){
  tabSymbols.push(symbols[element])
}

const indiceSymbol = Math.round(Math.random() * (20 - 1) + 1);

console.log(`[\n
            \'1:\'${tabSymbols[1]}, \'2:\'${tabSymbols[3]}, \'3:\'${tabSymbols[4]}, \'4:\'${tabSymbols[5]}
            \n]`);

 const memoryGame = () => {

 }



