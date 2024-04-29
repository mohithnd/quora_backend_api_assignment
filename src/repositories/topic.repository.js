const { Topic } = require("../models");
const { BadRequest } = require("../errors");

class TopicRepository {
  async createTopic(name) {
    try {
      if (!name) {
        throw new BadRequest("name");
      }
      const topic = await Topic.create({
        name: name,
      });
      return topic;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getTopics() {
    try {
      const topics = await Topic.find();
      return topics;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = TopicRepository;
