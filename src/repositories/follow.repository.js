const { User } = require("../models");
const mongoose = require("mongoose");

class UserRepository {
  async followUser(userId, targetUserId) {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw "User Not Found";
      }
      const targetUser = await User.findById(targetUserId);
      if (!targetUser) {
        throw "Target User Not Found";
      }
      if (userId == targetUserId) {
        throw "User Can Not Follow It Self";
      }
      if (!user.followers) {
        user.followers = [];
      }
      user.followers.push(new mongoose.Types.ObjectId(targetUserId));
      await user.save();
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = UserRepository;
