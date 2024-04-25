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
}

module.exports = AnswerService;
