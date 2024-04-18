const express = require("express");
const userRouter = require("./user.routes");
const questionRouter = require("./question.routes");

const apiRouter = express.Router();

apiRouter.use("/users", userRouter);

apiRouter.use("/questions", questionRouter);

module.exports = apiRouter;
