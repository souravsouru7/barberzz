// src/interfaces/routes/adminRoutes.js
const express = require('express');
const AdminController = require('../controllers/AdminController');
const MongoAdminRepository = require('../../infrastructure/db/MongoAdminRepository');
const AdminService = require('../../application/services/AdminService');

const router = express.Router();

// Dependencies injection
const adminRepository = new MongoAdminRepository();
const adminService = new AdminService({ adminRepository });
const adminController = new AdminController({ adminService });

router.post('/login', adminController.login.bind(adminController));

module.exports = router;
