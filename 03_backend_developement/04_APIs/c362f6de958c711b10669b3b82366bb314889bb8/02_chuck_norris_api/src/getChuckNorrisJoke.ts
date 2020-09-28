import * as request from "request"

function getChuckNorrisJoke(category: string):void {
  // code the function here
  request('https://api.chucknorris.io/jokes/random?category='+category, (error, response, body) => {
    if(error){
      console.error(error);
    } else {
      console.log(body);
    }
  })
}

// leave line below for tests to work properly
export { getChuckNorrisJoke }
