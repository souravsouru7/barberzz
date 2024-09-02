// src/interfaces/controllers/AdminController.js
const LoginAdmin = require('../../application/use-case/Admin/LoginAdmin');

class AdminController {
    constructor({ adminService }) {
        this.adminService = adminService;
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const loginAdmin = new LoginAdmin({ adminService: this.adminService });
            const result = await loginAdmin.execute(email, password);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AdminController;
