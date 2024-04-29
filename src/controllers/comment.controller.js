const { CommentRepository } = require("../repositories");
const { CommentService } = require("../services");

const commentService = new CommentService(new CommentRepository());

async function addCommentOnAnswer(req, res, next) {
  try {
    const comment = await commentService.createCommentOnAnswer(
      req.params.answerId,
      req.body.userId,
      req.body.text
    );
    return res.status(201).json({
      message: "Comment On Answer Created Successfully",
      success: true,
      data: comment,
    });
  } catch (err) {
    next(err);
  }
}

async function addCommentOnComment(req, res, next) {
  try {
    const comment = await commentService.createCommentOnComment(
      req.params.commentId,
      req.body.userId,
      req.body.text
    );
    return res.status(201).json({
      message: "Comment On Comment Created Successfully",
      success: true,
      data: comment,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addCommentOnAnswer,
  addCommentOnComment,
};
