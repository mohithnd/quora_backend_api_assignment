const mongoose = require("mongoose");
const { Answer } = require("../models");
const { Question } = require("../models");
const { User } = require("../models");
const { NotFound } = require("../errors");
const { BadRequest } = require("../errors");

class AnswerRepository {
  async createAnswer(questionId, userId, text) {
    try {
      if (!questionId) {
        throw new BadRequest("questionId");
      }
      if (!userId) {
        throw new BadRequest("userId");
      }
      const question = await Question.findById(questionId);
      if (!question) {
        throw new NotFound("Question", questionId);
      }
      const user = await User.findById(userId);
      if (!user) {
        throw new NotFound("User", userId);
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

  async updateAnswer(answerId, text) {
    try {
      if (!answerId) {
        throw new BadRequest("answerId");
      }
      const answer = await Answer.findById(answerId);
      if (!answer) {
        throw new NotFound("Answer", answerId);
      }
      answer.text = text;
      await answer.save();
      return answer;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async likeIt(id, userId) {
    try {
      if (!id) {
        throw new BadRequest("id");
      }
      if (!userId) {
        throw new BadRequest("userId");
      }
      let user = await User.findById(userId);
      if (!user) {
        throw new NotFound("User", userId);
      }
      let answer = await Answer.findById(id);
      if (!answer) {
        throw new NotFound("Answer", answerId);
      }
      if (!answer.likes) {
        answer.likes = [];
      }
      answer.likes.push(new mongoose.Types.ObjectId(userId));
      await answer.save();
      return answer;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = AnswerRepository;
