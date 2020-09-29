import * as request from "request"

function getCategories() {
  // code the function hereZ
  request('https://api.chucknorris.io/jokes/categories', (error, response, body) => {
    if(error){
      console.error(error);
    } else {
      const categories = JSON.parse(body);
      console.log(categories);
    }
  })
}

// leave line below for tests to work properly 
export { getCategories }
