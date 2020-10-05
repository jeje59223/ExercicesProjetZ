import * as fs from "fs";
import * as path from "path";
import * as mongo from "mongodb";

// on type nos objets Platform
type Plateform = Record<string, unknown> & {
  games: Record<string, unknown>[];
};

// on type nos objets Game
type Game = Record<string, unknown>;

// fonction pour récupérer la data des fichiers json
function getDataFromFile(fileName: string): [Game[], Plateform] {
  const filePath = path.resolve(`data/${fileName}`);
  const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
  const platform = JSON.parse(stringifiedPlatform);
  // on va récupérer les platefoms sans les games
  const { games, ...platformWithoutGames } = platform;
  return [games, platformWithoutGames];
}

// function qui permet de créer les collections platform et game dans lesquelles on insére les données
export default function dataImport(db: mongo.Db): Promise<true> {
  // on créé nos 2 tableaux de allGames et allPlatforms
  let allGames: Game[] = [];
  const allPlatforms: Plateform[] = [];

  // On créé un tableau de files pour nos json
  // 1 - methode en durs
  //const fileNames = ["gba.json", "n64.json", "nes.json"];
  // 2 - de manière dynamique au cas ou on rajoute des fichiers json
  const dirPath = path.resolve("data"); // on donne le path
  const fileNames = fs.readdirSync(dirPath);
  
  // On boucle sur nos files
  fileNames.forEach((fileName) => {
    const [games, platform] = getDataFromFile(fileName);
    // on push toutes les platforms dans le tableau platforn
    allPlatforms.push(platform);
    // on push tous les jeux dans le tableau games
    // 1 - avec un forEach :
    // games.forEach((game) => allGames.push(game));
    // 2 - avec un spread Operator :
    allGames = [...allGames, ...games];
  });
// on créé nos collections et on insére les données
  return db.createCollection<Plateform>("platforms").then((plateformsCollection) => {
    return db.createCollection<Game>("games").then((gamesCollection) => {
      return plateformsCollection.insertMany(allPlatforms).then(() => {
        return gamesCollection.insertMany(allGames).then(() => {
          return true;
        });
      });
    });
  });
}



// Mon début d'exo :

// function choosePlatform(file: string): string {
//   const fileName = file;
//   const filePath = path.resolve(`data/${fileName}`);
//   const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
//   const platform = JSON.parse(stringifiedPlatform);
//   return platform;
// }

// const gba = choosePlatform("gba.json");
// const nes = choosePlatform("nes.json");
// const n64 = choosePlatform("n64.json");

// const plateform = [{gba}, {nes}, {n64}];
