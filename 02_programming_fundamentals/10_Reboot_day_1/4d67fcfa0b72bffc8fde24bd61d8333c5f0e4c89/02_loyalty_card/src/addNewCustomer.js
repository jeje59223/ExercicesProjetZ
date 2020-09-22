import customer from "./customers.js";

function addNewCustomer(reader){
    console.log('******************************************************');
    console.log("CREATE NEW CUSTOMER");
    console.log("******************************************************\n");
    reader.question("🤖 - first name:\n> ", (firstname) => {
        customer.customers.firstname = firstname;
        console.log(firstname);
        reader.question("🤖 - last name:\n> ", (lastname) => {
            customer.customers.lastname = lastname;
            console.log(lastname);
            reader.question("🤖 - email:>\n> ", (email) => {
                customer.customers.email = email;
                console.log(email);
                console.log(customer.customers);
            })
        });
    });
}
export default addNewCustomer;