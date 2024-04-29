const mongoose = require("mongoose");
const { Comment } = require("../models");
const { Answer } = require("../models");
const { User } = require("../models");
const { NotFound } = require("../errors");
const { BadRequest } = require("../errors");

class CommentRepository {
  async createCommentOnAnswer(answerId, userId, text) {
    try {
      if (!answerId) {
        throw new BadRequest("answerId");
      }
      if (!userId) {
        throw new BadRequest("userId");
      }
      const answer = await Answer.findById(answerId);
      if (!answer) {
        throw new NotFound("Answer", answerId);
      }
      const comment = await Comment.create({
        text: text,
        user_id: userId,
        parent_id: answerId,
      });
      return comment;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async createCommentOnComment(commentId, userId, text) {
    try {
      if (!commentId) {
        throw new BadRequest("commentId");
      }
      if (!userId) {
        throw new BadRequest("userId");
      }
      const previoudComment = await Comment.findById(commentId);
      if (!previoudComment) {
        throw new NotFound("Comment", commentId);
      }
      const comment = await Comment.create({
        text: text,
        user_id: userId,
        parent_id: commentId,
      });
      return comment;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async likeIt(id, userId) {
    try {
      if (!userId) {
        throw new BadRequest("userId");
      }
      if (!id) {
        throw new BadRequest("id");
      }
      let user = await User.findById(userId);
      if (!user) {
        throw new NotFound("User", userId);
      }
      let comment = await Comment.findById(id);
      if (!comment) {
        throw new NotFound("Comment", commentId);
      }
      if (!comment.likes) {
        comment.likes = [];
      }
      comment.likes.push(new mongoose.Types.ObjectId(userId));
      await comment.save();
      return comment;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = CommentRepository;
