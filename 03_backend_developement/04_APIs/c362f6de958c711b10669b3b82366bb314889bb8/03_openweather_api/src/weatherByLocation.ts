import * as request from "request"
// process.env.OPENWEATHER_API_KEY;

function weatherByZipcode(zipcode:number, countryCode:string): void {
  // code the function here
  request(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`, (error, response, body) => {
    if(error){
      console.error(error);
    } else {
      const data2 = JSON.parse(body);
      console.log(`${data2.city.name}`);
    }
  })
}
weatherByZipcode(59000, "FR");

function weatherByLatitudeAndLongitude(latitude:number, longitude:number): void {
  // code the function here
  request(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`, (error, response, body) => {
    if(error){
      console.error(error);
    } else {
      const data3 = JSON.parse(body);
      console.log(data3);
    }
  })
}
weatherByLatitudeAndLongitude(50.633,3.0586);
//console.log(50.633,3.0586);


// leave lines below for tests to work properly
module.exports = {
  weatherByZipcode,
  weatherByLatitudeAndLongitude
}
