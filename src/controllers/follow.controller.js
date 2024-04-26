const { FollowRepository } = require("../repositories");
const { FollowService } = require("../services");

const followService = new FollowService(new FollowRepository());

async function followUser(req, res, next) {
  try {
    const user = await followService.followUser(
      req.params.userId,
      req.params.targetUserId
    );
    return res.status(201).json({
      message: "Follower Added Successfully",
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(404).json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

module.exports = {
  followUser,
};
