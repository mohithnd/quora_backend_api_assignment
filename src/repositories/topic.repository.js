const { Topic } = require("../models");

class TopicRepository {
  async createTopic(name) {
    try {
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
