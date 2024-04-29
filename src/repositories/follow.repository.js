const { User } = require("../models");
const mongoose = require("mongoose");
const { NotFound } = require("../errors");
const { BadRequest } = require("../errors");

class FollowRepository {
  async followUser(userId, targetUserId) {
    try {
      if (!userId) {
        throw new BadRequest("userId");
      }
      if (!targetUserId) {
        throw new BadRequest("targetUserId");
      }
      const user = await User.findById(userId);
      if (!user) {
        throw new NotFound("User", userId);
      }
      const targetUser = await User.findById(targetUserId);
      if (!targetUser) {
        throw new NotFound("Target User", userId);
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

module.exports = FollowRepository;
