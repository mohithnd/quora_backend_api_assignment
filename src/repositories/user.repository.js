const { User } = require("../models");
const { NotFound } = require("../errors");
const { BadRequest } = require("../errors");

class UserRepository {
  async createUser(userData) {
    try {
      if (!userData.username) {
        throw new BadRequest("username");
      }
      if (!userData.email) {
        throw new BadRequest("email");
      }
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
      if (!userId) {
        throw new BadRequest("userId");
      }
      const user = await User.findById(userId);
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async updateUser(userId, username, email, bio) {
    try {
      if (!userId) {
        throw new BadRequest("userId");
      }
      const user = await User.findById(userId);
      if (user === null) {
        throw new NotFound("User", userId);
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
