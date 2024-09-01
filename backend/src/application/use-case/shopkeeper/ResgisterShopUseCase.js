const Shopkeeper = require('../../../domain/entities/Shopkeeper');
const UploadService = require('../../../infrastructure/external-services/UploadService'); // Ensure correct import

class RegisterShopkeeperUseCase {
    constructor(shopkeeperRepository) {
        this.shopkeeperRepository = shopkeeperRepository;
        this.uploadService = new UploadService();
    }

    async execute({ name, email, password, address, contactNumber, shopName, shopLicenseFile }) {
        const shopLicense = await this.uploadService.uploadFile(shopLicenseFile);
        const shopkeeper = new Shopkeeper({ name, email, password, address, contactNumber, shopName, shopLicense });
        return await this.shopkeeperRepository.save(shopkeeper);
    }
}
module.exports = RegisterShopkeeperUseCase;
