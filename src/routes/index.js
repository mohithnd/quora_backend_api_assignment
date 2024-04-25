const express = require("express");
const userRouter = require("./user.routes");
const questionRouter = require("./question.routes");
const answerRouter = require("./answer.routes");

const apiRouter = express.Router();

apiRouter.use("/users", userRouter);

apiRouter.use("/questions", questionRouter);

apiRouter.use("/answers", answerRouter);

module.exports = apiRouter;
