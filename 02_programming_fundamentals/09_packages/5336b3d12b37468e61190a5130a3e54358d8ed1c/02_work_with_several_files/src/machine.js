function fillWithLitersOfCoffee (liters) {
  this.litersOfCoffee += liters;
}

function expresso () {
  return this.serveACup(0.08);
}

function longCoffee () {
  return this.serveACup(0.15);
}

export { fillWithLitersOfCoffee, expresso, longCoffee };