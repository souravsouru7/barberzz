// src/application/use-cases/LoginAdmin.js
class LoginAdmin {
    constructor({ adminService }) {
        this.adminService = adminService;
    }

    async execute(email, password) {
        return await this.adminService.loginAdmin(email, password);
    }
}

module.exports = LoginAdmin;
