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

  async likeIt(id, userId) {
    const comment = await this.answerRepository.likeIt(id, userId);
    return comment;
  }
}

module.exports = AnswerService;
