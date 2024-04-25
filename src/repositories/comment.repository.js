const mongoose = require("mongoose");
const { Comment } = require("../models");
const { Answer } = require("../models");
const { User } = require("../models");

class CommentRepository {
  async createCommentOnAnswer(answerId, userId, text) {
    try {
      const answer = await Answer.findById(answerId);
      if (!answer) {
        throw "Answer Not Found";
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
      const previoudComment = await Comment.findById(commentId);
      if (!previoudComment) {
        throw "Comment Not Found";
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
      let user = await User.findById(userId);
      if (!user) {
        throw "User Not Found";
      }
      let comment = await Comment.findById(id);
      if (!comment) {
        throw "Comment Not Found";
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
