// Don't modify these lines for tests to work properly.
const star = require("./data/starData");
const planet = require("./data/exoplanetData");

// Your code here:
let canHabitateLife = true;

if(star.spectralClass === "O" || star.spectralClass === "B" || star.spectralClass === "A" || star.spectralClass === "F" || star.spectralClass === "G"){
    canHabitateLife = !canHabitateLife;
}

if(!planet.habitalZone){
    canHabitateLife = !canHabitateLife;
}

if(!planet.rotationStability){
    canHabitateLife = !canHabitateLife;
}

if(planet.radius <= 0.5){
    canHabitateLife = !canHabitateLife;
}

if(planet.radius >= 2.5){
    canHabitateLife = !canHabitateLife;
}

if(planet.mass < 0.5 && planet.radius < 1){
    canHabitateLife = !canHabitateLife;
}

// Don't modifiy this line for test to work properly.
module.exports = canHabitateLife;
