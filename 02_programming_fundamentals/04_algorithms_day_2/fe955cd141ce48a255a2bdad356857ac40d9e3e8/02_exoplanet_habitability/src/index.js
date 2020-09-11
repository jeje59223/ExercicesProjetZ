const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
  // Code the function here.
//   if(star.spectralClass !== "K" & star.spectralClass !== "M"){
//     return false;
// }

// Do not remove last lines, it is for tests
module.exports = canHabitateLife;

// should not return 'undefined' (2 ms)
// ✕ should return a Boolean (3 ms)
// ✕ should return false for stars with spectral class O, B, A, F, G.  (1 ms)
// ✕ should return true for suitable planets and stars with spectral class K, M.
// Planets' criteria with star of spectral classes K and M
// ✕ should return true for an Earth like planet (1 ms)
// ✕ should return false a planet outside an habitable zone
// ✕ should return false for a planet without a stable rotation (1 ms)
// ✕ should return false for a planet with a radius <= 0.5
// ✕ should return false for a planet with a radius >= 2.5
// ✕ should return false for a planet with a mass >= 3 (1 ms)
// ✕ should return false for a planet with a mass < 0.5 and a radius < 1
// ✕ should return true for a planet with a mass < 0.5 and a radius > 1 (1 ms)