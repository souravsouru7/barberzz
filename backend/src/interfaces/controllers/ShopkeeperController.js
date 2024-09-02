const Shopkeeper = require('../../domain/entities/Shopkeeper');
const UploadService = require('../../infrastructure/external-services/UploadService'); // Ensure correct import
const ShopkeeperRepository=require("../../domain/repositories/ShopkeeperRepository")
const ShopkeeperModel=require("../../infrastructure/models/ShopkeeperModel")
const RegisterShopkeeperUseCase=require("../../application/use-case/shopkeeper/ResgisterShopUseCase")
const LoginShopkeeperUseCase=require("../../application/use-case/shopkeeper/LoginShopkeeperUseCase")
class ShopkeeperController {
    constructor() {
        this.shopkeeperRepository = new ShopkeeperRepository(ShopkeeperModel);
        this.registerShopkeeperUseCase = new RegisterShopkeeperUseCase(this.shopkeeperRepository);
        this.loginShopkeeperUseCase = new LoginShopkeeperUseCase(this.shopkeeperRepository);
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
    async loginShopkeeper(req, res) {
        try {
            const { email, password } = req.body;
            const result = await this.loginShopkeeperUseCase.execute({ email, password });
            res.json(result);
        } catch (error) {
            console.error('Error:', error);
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = ShopkeeperController;
