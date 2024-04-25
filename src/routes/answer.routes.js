const express = require("express");
const { answerController } = require("../controllers");
const { commentController } = require("../controllers");
const { likeController } = require("../controllers");

const answerRouter = express.Router();

answerRouter.put("/:answerId", answerController.updateAnswer);

answerRouter.post("/:answerId/comments", commentController.addCommentOnAnswer);

answerRouter.post("/:id/likes", likeController.addLikeOnAnswer);

module.exports = answerRouter;
