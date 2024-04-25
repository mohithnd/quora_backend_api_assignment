const mongoose = require("mongoose");
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

  async searchQuestions(text, tag) {
    try {
      let query = {};
      if (text && tag) {
        query.$and = [query.$text, query.topics];
      } else if (text) {
        const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        query.$text = { $search: escapedText, $caseSensitive: false };
      } else if (tag) {
        query.topics = { $in: [tag] };
      }
      const questions = await Question.find(query);
      return questions;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async likeIt(id, userId) {
    try {
      let user = await User.findById(userId);
      if (!user) {
        throw "User Not Found";
      }
      let question = await Question.findById(id);
      if (!question) {
        throw "Question Not Found";
      }
      if (!question.likes) {
        question.likes = [];
      }
      question.likes.push(new mongoose.Types.ObjectId(userId));
      await question.save();
      return question;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = QuestionRepository;
