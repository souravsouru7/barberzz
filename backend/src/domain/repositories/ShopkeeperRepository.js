class ShopkeeperRepository {
    constructor(shopkeeperModel) {
        this.shopkeeperModel = shopkeeperModel;
    }

    async save(shopkeeper) {
        const newShopkeeper = new this.shopkeeperModel(shopkeeper);
        return await newShopkeeper.save();
    }
    async findByEmail(email) {
        return await this.shopkeeperModel.findOne({ email });
    }

}

module.exports = ShopkeeperRepository;
