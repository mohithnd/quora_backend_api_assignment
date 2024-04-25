const express = require("express");
const { commentController } = require("../controllers");
const { likeController } = require("../controllers");

const commentRouter = express.Router();

commentRouter.post(
  "/:commentId/comments",
  commentController.addCommentOnComment
);

commentRouter.post("/:id/likes", likeController.addLikeOnComment);

module.exports = commentRouter;
