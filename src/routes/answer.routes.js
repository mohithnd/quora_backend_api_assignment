const express = require("express");
const { answerController } = require("../controllers");

const answerRouter = express.Router();

answerRouter.put("/:answerId", answerController.updateAnswer);

module.exports = answerRouter;
