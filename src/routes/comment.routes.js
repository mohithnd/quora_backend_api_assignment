const express = require("express");
const { commentController } = require("../controllers");

const commentRouter = express.Router();

commentRouter.post(
  "/:commentId/comments",
  commentController.addCommentOnComment
);

module.exports = commentRouter;
