const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ShopkeeperRepository = require('../../../domain/repositories/ShopkeeperRepository');

class LoginShopkeeperUseCase {
    constructor(shopkeeperRepository) {
        this.shopkeeperRepository = shopkeeperRepository;
    }

    async execute({ email, password }) {
        
        const shopkeeper = await this.shopkeeperRepository.findByEmail(email);
        if (!shopkeeper) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, shopkeeper.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        
        const token = jwt.sign(
            { id: shopkeeper._id, email: shopkeeper.email },
            'your_jwt_secret',
            { expiresIn: '1h' }
        );

        return { token, shopkeeper };
    }
}

module.exports = LoginShopkeeperUseCase;
