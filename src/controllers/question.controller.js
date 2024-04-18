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
    return res.json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

async function getQuestions(req, res, next) {}

module.exports = {
  addQuestion,
  getQuestions,
};
