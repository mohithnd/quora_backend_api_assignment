const { QuestionService } = require("../services");
const { QuestionRepository } = require("../repositories");

const questionService = new QuestionService(new QuestionRepository());

async function addQuestion(req, res, next) {
  try {
    const question = await questionService.createQuestion(
      req.body.userId,
      req.body.title,
      req.body.body,
      req.body.topicTags
    );
    return res.status(200).json({
      message: "Question Created Successfully",
      success: true,
      data: question,
    });
  } catch (err) {
    next(err);
  }
}

async function getQuestions(req, res, next) {
  try {
    const questions = await questionService.searchQuestions(
      req.query.text,
      req.query.tag
    );
    return res.status(200).json({
      message: "Question Fetched Successfully",
      success: true,
      data: questions,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addQuestion,
  getQuestions,
};
