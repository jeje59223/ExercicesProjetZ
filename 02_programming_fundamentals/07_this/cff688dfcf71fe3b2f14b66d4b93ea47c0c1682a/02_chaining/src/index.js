const car = require("./car");

car.start().changeSpeed(130).drive(42).showDistance();
car.start().changeSpeed(100).drive(30).changeSpeed(50).drive(30).showDistance(); // => "75 Km" 
car.start().changeSpeed(130).showDistance();
car.start().changeSpeed(100).drive(30).showDistance();
