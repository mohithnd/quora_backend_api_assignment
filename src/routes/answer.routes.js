const express = require("express");
const { answerController } = require("../controllers");
const { commentController } = require("../controllers");

const answerRouter = express.Router();

answerRouter.put("/:answerId", answerController.updateAnswer);

answerRouter.post("/:answerId/comments", commentController.addCommentOnAnswer);

module.exports = answerRouter;
