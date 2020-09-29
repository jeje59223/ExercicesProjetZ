import * as request from "request"

function getChuckNorrisJoke(category: string):void {
  // code the function here
  request('https://api.chucknorris.io/jokes/random?category='+category, (error, response, body) => {
    if(error){
      console.error(error);
    } else {
      const joke = JSON.parse(body)
      console.log(joke.value);
    }
  })
}

// leave line below for tests to work properly
export { getChuckNorrisJoke }
