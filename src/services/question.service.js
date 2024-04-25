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

  async searchQuestions(text, tag) {
    const questions = await this.questionRepository.searchQuestions(text, tag);
    return questions;
  }
}

module.exports = QuestionService;
