const mongoose = require("mongoose");
const { Question } = require("../models/");
const { User } = require("../models/");
const { NotFound } = require("../errors");
const { BadRequest } = require("../errors");

class QuestionRepository {
  async createQuestion(userId, title, body, topicTags) {
    try {
      if (!userId) {
        throw new BadRequest("userId");
      }
      const user = await User.findById(userId);
      if (user == null) {
        throw new NotFound("User", userId);
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
      if (!userId) {
        throw new BadRequest("userId");
      }
      if (!id) {
        throw new BadRequest("id");
      }
      let user = await User.findById(userId);
      if (!user) {
        throw new NotFound("User", userId);
      }
      let question = await Question.findById(id);
      if (!question) {
        throw new NotFound("Question", id);
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
