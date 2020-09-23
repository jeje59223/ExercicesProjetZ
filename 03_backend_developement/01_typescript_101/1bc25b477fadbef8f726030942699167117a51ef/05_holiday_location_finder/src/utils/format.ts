import { CITIES, CONTINENTS } from "../data/data";
import { holidayLocationFinder } from "../holidayLocationFinder";

// Format user input.
function sanitizeUserInput(location: string) :any{
  // Write your code here
  holidayLocationFinder(location).trim();
  
}


// Leave the line below for tests to work properly.
export { sanitizeUserInput };
