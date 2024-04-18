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

  async getUser(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async updateUser(userId, username, email, bio) {
    try {
      const user = await User.findById(userId);
      if (user === null) {
        throw "User Not Found";
      }
      if (username) {
        user.username = username;
      }
      if (email) {
        user.email = email;
      }
      if (bio) {
        user.bio = bio;
      }
      await user.save();
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = UserRepository;
