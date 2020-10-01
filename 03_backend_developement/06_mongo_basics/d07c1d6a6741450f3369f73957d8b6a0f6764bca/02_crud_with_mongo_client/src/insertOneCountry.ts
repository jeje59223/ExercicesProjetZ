import * as mongo from "mongodb";
import {Country} from "./types";

const spain = {
  name: "Spain",
  capital: "Madrid",
  continent: "Europe",
}

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  // code your function here
  return db.collection("worldAtlas").insertOne(spain).then(() => { return spain })
}
