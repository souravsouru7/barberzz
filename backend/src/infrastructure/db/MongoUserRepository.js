// backend/src/infrastructure/db/MongoUserRepository.js

const mongoose = require('mongoose');
const UserRepository = require('../../domain/repositories/UserRepository');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  isVerified: Boolean,
  otp: String,           
  otpExpires: Date,  
});

const UserModel = mongoose.model('User', userSchema);

class MongoUserRepository extends UserRepository {
  async createUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new UserModel({
      ...user,
      password: hashedPassword,
    });
    return await newUser.save();
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async updateUser(user) {
    return await UserModel.updateOne({ email: user.email }, user);
  }

  async verifyUser(email) {
    return await UserModel.updateOne({ email }, { isVerified: true });
  }
}

module.exports = MongoUserRepository;
