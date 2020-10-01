import * as mongo from "mongodb";
import {Country} from "./types";


const pays = [
  {
    name: "Canada",
    capital: "Ottawa",
    continent: "America",
  },

  {
    name: "Brazil",
    capital: "Brasilia",
    continent: "America",
  },
];

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertMany(pays)
    .then(() => {
      return pays;
    })
}
