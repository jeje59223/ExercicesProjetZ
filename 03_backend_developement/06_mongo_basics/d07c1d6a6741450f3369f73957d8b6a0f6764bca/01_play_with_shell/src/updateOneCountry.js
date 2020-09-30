/* global db */

// write your MongoDB shell command here
db.worldAtlas.updateMany({ name: "Australia" }, { $set: { capital: "Canberra" } })