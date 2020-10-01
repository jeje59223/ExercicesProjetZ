import * as mongo from "mongodb";
import { showCollections } from "./showCollections";

export function findOneCountry(db : mongo.Db) {
  // code your function here
  return db.collection("worldAtlas").findOne({name: "Iceland"});
}
