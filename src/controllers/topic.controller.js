const { TopicRepository } = require("../repositories");
const { TopicService } = require("../services");

const topicService = new TopicService(new TopicRepository());

async function addTopic(req, res, next) {
  try {
    const topic = await topicService.createTopic(req.body.name);
    return res.status(201).json({
      message: "Topic Created Successfully",
      success: true,
      data: topic,
    });
  } catch (err) {
    return res.status(404).json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

async function getTopics(req, res, next) {
  try {
    const topics = await topicService.getTopics();
    return res.status(200).json({
      message: "Topics Fetched Successfully",
      success: true,
      data: topics,
    });
  } catch (err) {
    return res.status(404).json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

module.exports = {
  addTopic,
  getTopics,
};
