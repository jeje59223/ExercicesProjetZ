import { Interface } from "readline";
import { CITIES, CONTINENTS } from "./data/data";

function holidayLocationFinder(reader: Interface) : any {
  // Write your code here
  reader.question("Please input your choice:", (location: string): any => {
    switch(location){
      case "Europe": 
        return CITIES.Europe;
      break;
      case "NorthAfrica":
        return CITIES.North_America;
      break;
      case "SouthAfrica":
        return CITIES.South_America;
      break;
      case "Asia":
        return CITIES.Asia;
      break;
      case "Africa":
        return CITIES.Africa;
      break;
      case "Oceania":
        return CITIES.Oceania
      break;
      default: console.log("I don't think I have to tell you why I did not put Antarctica there 😅.");
    }
  })
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
