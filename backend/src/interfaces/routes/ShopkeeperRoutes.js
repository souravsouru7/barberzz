const express = require('express');
const ShopkeeperController = require('../controllers/ShopkeeperController');
const multer = require('multer');
const path = require('path');

const router = express.Router();
const shopkeeperController = new ShopkeeperController();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Initialize multer with the defined storage configuration
const upload = multer({ storage });

router.post('/register', upload.single('shopLicense'), (req, res) => {
    shopkeeperController.registerShopkeeper(req, res);
});

module.exports = router;
