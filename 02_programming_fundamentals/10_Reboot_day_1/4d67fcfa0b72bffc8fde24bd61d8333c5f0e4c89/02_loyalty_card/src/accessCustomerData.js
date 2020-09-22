import customer from "./customers.js";
import chooseCustomer from "./affichagePageAccueil.js";

function accessCustomerData(){
    // reader.question("🤖 - first name:\n> ", (firstname) => {
    //     console.log(firstname);
    // });
    console.log('access customer data');
    console.log(chooseCustomer.chooseCustomer());
}

export default accessCustomerData;