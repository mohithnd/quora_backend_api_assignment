const { Answer } = require("../models");
const { Question } = require("../models");
const { User } = require("../models");

class AnswerRepository {
  async createAnswer(questionId, userId, text) {
    try {
      const question = await Question.findById(questionId);
      if (!question) {
        throw "Question Not Found";
      }
      const user = await User.findById(userId);
      if (!user) {
        throw "User Not Found";
      }
      const answer = await Answer.create({
        text: text,
        user_id: userId,
        question_id: questionId,
      });
      return answer;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = AnswerRepository;
