const Shopkeeper = require('../../domain/entities/Shopkeeper');
const UploadService = require('../../infrastructure/external-services/UploadService'); // Ensure correct import
const ShopkeeperRepository=require("../../domain/repositories/ShopkeeperRepository")
const ShopkeeperModel=require("../../infrastructure/models/ShopkeeperModel")
const RegisterShopkeeperUseCase=require("../../application/use-case/shopkeeper/ResgisterShopUseCase")

class ShopkeeperController {
    constructor() {
        this.shopkeeperRepository = new ShopkeeperRepository(ShopkeeperModel);
        this.registerShopkeeperUseCase = new RegisterShopkeeperUseCase(this.shopkeeperRepository);
    }

    async registerShopkeeper(req, res) {
        try {
            const { name, email, password, address, contactNumber, shopName } = req.body;
            const shopLicenseFile = req.file; // Check if multer added `file` property

            // Debugging statement to check file object
            console.log('shopLicenseFile:', shopLicenseFile);

            if (!shopLicenseFile) {
                return res.status(400).json({ error: 'Shop license file is required.' });
            }

            const shopkeeper = await this.registerShopkeeperUseCase.execute({
                name, email, password, address, contactNumber, shopName, shopLicenseFile
            });

            res.status(201).json(shopkeeper);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ShopkeeperController;
