const express = require("express");
const { topicController } = require("../controllers");

const topicRouter = express.Router();

topicRouter.post("/", topicController.addTopic);

topicRouter.get("/", topicController.getTopics);

module.exports = topicRouter;
