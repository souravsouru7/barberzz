// src/application/services/AdminService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AdminService {
    constructor({ adminRepository }) {
        this.adminRepository = adminRepository;
    }

    async loginAdmin(email, password) {
        const admin = await this.adminRepository.findByEmail(email);
        if (!admin) throw new Error('Admin not found.');

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) throw new Error('Incorrect password.');

        const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return { token, admin };
    }
}

module.exports = AdminService;
