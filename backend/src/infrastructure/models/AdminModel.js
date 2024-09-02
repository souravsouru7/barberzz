// src/infrastructure/models/AdminModel.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
});

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
