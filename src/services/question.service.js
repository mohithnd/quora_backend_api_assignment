class QuestionService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }

  async createQuestion(userId, title, body, topicTags) {
    const question = await this.questionRepository.createQuestion(
      userId,
      title,
      body,
      topicTags
    );
    return question;
  }
}

module.exports = QuestionService;
