// src/infrastructure/db/MongoAdminRepository.js
const AdminModel = require('../models/AdminModel');
const AdminRepository = require('../../domain/repositories/AdminRepository');
const Admin = require('../../domain/entities/Admin');

class MongoAdminRepository extends AdminRepository {
    async findByEmail(email) {
        const adminData = await AdminModel.findOne({ email });
        if (!adminData) return null;
        return new Admin(adminData);
    }

    async save(admin) {
        const adminModel = new AdminModel(admin);
        await adminModel.save();
        return new Admin(adminModel);
    }
}

module.exports = MongoAdminRepository;
