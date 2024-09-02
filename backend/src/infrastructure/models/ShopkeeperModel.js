const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ShopkeeperSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    shopName: { type: String, required: true },
    shopLicense: { type: String } // This will store the file path or URL
}, { timestamps: true });


ShopkeeperSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model('Shopkeeper', ShopkeeperSchema);
