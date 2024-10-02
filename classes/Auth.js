const Customer = require("./Customer");
class Auth {
    constructor() {
        this.customers = []; // Initializes as an empty array
    }

    register(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }

    login(email) {
        return this.customers.find(customer => customer.email === email) || null; // Return Customer or null
    }
}


module.exports = Auth; // Export the Auth class
