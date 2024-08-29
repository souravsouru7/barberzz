

class UserRepository {
    async createUser(user) {
      throw new Error("Method not implemented.");
    }
  
    async findByEmail(email) {
      return UserModel.findOne({ email });
    }
  
    async verifyUser(email) {
      throw new Error("Method not implemented.");
    }
  }
  
  module.exports = UserRepository;
  