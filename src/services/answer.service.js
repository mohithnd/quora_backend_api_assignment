class AnswerService {
  constructor(answerRepository) {
    this.answerRepository = answerRepository;
  }

  async createAnswer(questionId, userId, text) {
    const answer = await this.answerRepository.createAnswer(
      questionId,
      userId,
      text
    );
    return answer;
  }

  async updateAnswer(answerId, text) {
    const answer = await this.answerRepository.updateAnswer(answerId, text);
    return answer;
  }
}

module.exports = AnswerService;
