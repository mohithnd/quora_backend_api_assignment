const { User } = require("../models");

class UserRepository {
  async createUser(userData) {
    try {
      const user = await User.create({
        username: userData.username,
        email: userData.email,
      });
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = UserRepository;
