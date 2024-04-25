const { Comment } = require("../models");
const { Answer } = require("../models");

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
}

module.exports = CommentRepository;
