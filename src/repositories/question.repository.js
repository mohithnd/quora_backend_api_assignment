const { Question } = require("../models/");
const { User } = require("../models/");

class QuestionRepository {
  async createQuestion(userId, title, body, topicTags) {
    try {
      const user = await User.findById(userId);
      if (user == null) {
        throw "User Not Found";
      }
      const question = await Question.create({
        title: title,
        body: body,
        user_id: userId,
        topics: topicTags ? topicTags : [],
      });
      return question;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = QuestionRepository;
