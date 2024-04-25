const express = require("express");
const userRouter = require("./user.routes");
const questionRouter = require("./question.routes");
const answerRouter = require("./answer.routes");
const commentRouter = require("./comment.routes");

const apiRouter = express.Router();

apiRouter.use("/users", userRouter);

apiRouter.use("/questions", questionRouter);

apiRouter.use("/answers", answerRouter);

apiRouter.use("/comments", commentRouter);

module.exports = apiRouter;
