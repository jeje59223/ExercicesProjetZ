const machine = {
  // Complete here
  litersOfCoffee: 0,
  
  expresso: function () {
    if(this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    } else {
      return false;
    }
    
    // return this;
  },
  
  longCoffee: function () {
    if(this.litersOfCoffee >= 0.15){
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      return true;
    } else {
      return false;
    }
    // return this;
  },
  
  fillWithLitersOfCoffee: function (litersOfCoffee) {
    this.litersOfCoffee += litersOfCoffee;
    return this;
  },
};

module.exports = machine;
