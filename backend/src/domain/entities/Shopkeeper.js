class Shopkeeper {
    constructor({ name, email, password, address, contactNumber, shopName, shopLicense }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.contactNumber = contactNumber;
        this.shopName = shopName;
        this.shopLicense = shopLicense;
    }
}

module.exports = Shopkeeper;
