let READER;

// tableau d'articles du shop
const articles = [
    {
      designation: "beer",
      price: 4,
      quantity: 300,
    },
    {
      designation: "chips",
      price: 2,
      quantity: 25,
    },
    {
      designation: "cheese",
      price: 3,
      quantity: 50,
    },
    {
      designation: "olives",
      price: 1,
      quantity: 200,
    },
    {
      designation: "waterBottles",
      price: 0.5,
      quantity: 1000,
    },
];

// tableau => panier
const cart = [];

// function qui gere le reader
const ask = (question, callback) => {
    const prettyQuestion = `🤖 ${question}\n> `;
    READER.question(prettyQuestion, callback);
  };

  // function qui gère le titre des pages
  function title(title){
    console.log("**************************************************");
    console.log(title);
    console.log("**************************************************");
  }

// fonction qui permet l'affichage des actions du menu
const printElementMenu = (action, index) => console.log(`${index + 1} ${action}`);

// fonction qui permet l'affichage des articles du shop
const printArticles = (article, index) => console.log(`${index + 1} ${article.designation}: ${article.price}€ (quantity: ${article.quantity})`);

// fonction qui permet l'affichage du panier
const printArticlesCart = (article, index) => console.log(`${index + 1} ${cart[0]}: ${cart[2]}€ (quantity: ${cart[1]})`);

// fonction qui boucle afin de permettre de récupérer index et action
function printMenu(actionsList) {
  title("MENU");
  actionsList.forEach(printElementMenu);
}

// fonction qui boucle afin de permettre de récupérer index et articles
function printBuyAProduct(articlesList){
    title("SHOP");
    articlesList.forEach(printArticles);
    console.log("6 back to menu");
    console.log("7 Quit");
}

// fonction qui permet l'affichage du panier
function printCart(articlesList){
    title("CART");
    printArticlesCart();
    articlesList.forEach(printArticlesCart);
    // console.log(cart);
    // for(let i = 0; i < cart.length; i++){
    //     console.log(cart[i]);
    // }
   // console.log(`${cart[1] * cart[2] +  cart[4]*cart[5]}`);

//    for (let index = 0; index < cart.length; index++) {
//     if (cart[index] % 2 === 0) {
//         console.log(`Montant = ${cart[index].price}€`);
//         // console.log(cart[index]);
//     }
//   }
}

// fonction pour poser la poser sur le show
function shopping(){
    printBuyAProduct(articles)
    ask("Choose a product", (product) => {
        if(product !== "q"){
            //console.log(articles[product -1]);
            ask("How much ?", (howMuch) => {
                const newQuant = articles[product - 1].quantity - howMuch;
                cart.push(articles[product -1].designation, Number(howMuch), articles[product -1].price);
                articles[product-1].quantity = newQuant;
                //console.log(cart);
                //console.log(articles);
                shopping();
            })
        } else {
            eCommerce(READER);
        }
    });
}

// fonction du menu
function eCommerce(reader) {
    READER = reader;
    printMenu(["- Buy a product", "- Show cart", "- Checkout", " - Quit"]);
    reader.question("🤖 Choose an action\n> ", (action) => {
      menu(action);
    });
  };

// fonction qui permet de sélectionner une action
function menu(action) {
  switch (action) {
    case "1":
      console.clear();
      shopping();
      break;
    case "2":
      console.clear();
      printCart();
      break;
    case "3":
      console.clear();
      console.log("checkout");
      // listTasks(tasks);
      break;
    case "4":
      console.log("Work hard!");
      READER.close();
      break;
    default:
      console.log("⚠️Cmd unknown⚠️");
      eCommerce(READER);
  }
}

module.exports = eCommerce;