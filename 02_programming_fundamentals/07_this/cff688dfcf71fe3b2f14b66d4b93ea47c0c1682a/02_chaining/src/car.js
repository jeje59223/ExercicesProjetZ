const car = {
  // Complete here
  speed: 0,
  tps: 0,
  distance: 0,

  start: function () {
    this.speed = 0;
    this.tps = 0;
    this.distance = 0;
    return this;
  },
  
  changeSpeed: function (speed) {
    this.speed = speed;
    return this;
  },

  drive: function (tps) {
    this.tps = tps;
    this.distance += this.speed * this.tps / 60;
    return this;
  },

  showDistance: function () {
    console.log(this.distance + " Km");
    return this;
  },
};

module.exports = car;
