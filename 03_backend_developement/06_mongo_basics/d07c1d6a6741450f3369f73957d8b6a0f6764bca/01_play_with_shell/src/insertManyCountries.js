/* global db */

// write your MongoDB shell command here
db.worldAtlas.insertMany([
  {
    name: "Royaume-Unis",
    capital: "Londres",
    continent: "Europe",
  },
  {
    name: "Italie",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Allemagne",
    capital: "Berlin",
    continent: "Europe",
  },
]);
