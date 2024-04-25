const express = require("express");
const { questionController } = require("../controllers");
const { answerController } = require("../controllers");

const questionRouter = express.Router();

questionRouter.post("/", questionController.addQuestion);

questionRouter.get("/search", questionController.getQuestions);

questionRouter.post("/:questionId/answers", answerController.addAnswer);

module.exports = questionRouter;