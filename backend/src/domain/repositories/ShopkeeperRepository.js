class ShopkeeperRepository {
    constructor(shopkeeperModel) {
        this.shopkeeperModel = shopkeeperModel;
    }

    async save(shopkeeper) {
        const newShopkeeper = new this.shopkeeperModel(shopkeeper);
        return await newShopkeeper.save();
    }

}

module.exports = ShopkeeperRepository;
