const mongoose = require('mongoose');

const ShopkeeperSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    shopName: { type: String, required: true },
    shopLicense: { type: String } // This will store the file path or URL
}, { timestamps: true });

module.exports = mongoose.model('Shopkeeper', ShopkeeperSchema);
