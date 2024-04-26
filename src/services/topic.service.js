class TopicService {
  constructor(topicRepository) {
    this.topicRepository = topicRepository;
  }

  async createTopic(name) {
    const topic = await this.topicRepository.createTopic(name);
    return topic;
  }

  async getTopics() {
    const topics = await this.topicRepository.getTopics();
    return topics;
  }
}

module.exports = TopicService;
