
const customers = [];

// const customer = {
//     firstname: this.firstname,
//     lastname: this.lastname,
//     fullname: function() {
//         return this.firstname + " " + this.lastname
//     },
//     mail: this.mail,
//     address: {
//         city: this.city,
//         country: this.country
//     },
//     fidelityPoints: this.fidelityPoints,
//     useFidelityPoints: this.useFidelityPoints
// };

const rambo = {
    firstname : "john",
    lastname : "Rambo",
    fullname : function() {
        return this.firstname + " " + this.lastname
    },
    mail : "jrambon@gmail.com",

    address : {
        city: "New-York",
        country: "USA"
    },
    
    fidelityPoints : 453,
    useFidelityPoints : 34,
};

const bob = {
    firstname : "Bob",
    lastname : "L'eponge",
    fullname : function() {
        return this.firstname + " " + this.lastname
    },
    mail : "bob@gmail.com",

    address : {
        city: "bikini bottom",
        country: "Dans la mer"
    },
    
    fidelityPoints : 2,
    useFidelityPoints : 1,
};

const stan = {
    firstname : "Stan",
    lastname : "Marsh",
    fullname : function() {
        return this.firstname + " " + this.lastname
    },
    mail : "stan@gmail.com",

    address : {
        city: "South Park",
        country: "Colorado"
    },
    
    fidelityPoints : 256,
    useFidelityPoints : 143,
};

customers.push(rambo, bob, stan);
// console.log(customers);

export default { customers };