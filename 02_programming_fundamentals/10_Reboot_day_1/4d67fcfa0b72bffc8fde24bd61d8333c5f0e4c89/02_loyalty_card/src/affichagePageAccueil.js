import addNewCustomer from "./addNewCustomer.js";
import accessCustomerData from "./accessCustomerData.js";
import customers from "./customers.js";


const menu = () => {
    let txt = "";
    txt += "Welcome\n";
    txt += "************************************************\n";
    txt += "1 - Add new customer\n";
    txt += "2 - Access customer data\n";
    txt += "3 - Quit\n";
    return txt;
}

const chooseCustomer = () => {
    let txt = "";
    txt += "************************************************\n";
    txt += "CHOOSE A CUSTOMER\n";
    txt += "************************************************\n";
    txt += customers;

    return txt;
}

function chooseAnAction(reader){
    reader.question("Choose an action\n> ", (action) => {
        switch(action){
            case "1": addNewCustomer(reader);
            break;
            case "2": accessCustomerData();
            break;
            case "3" :  console.log("A bientôt");
                        reader.close()
        }
    });
} 
export default { menu, chooseAnAction, chooseCustomer };