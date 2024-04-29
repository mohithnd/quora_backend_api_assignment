const { AnswerRepository } = require("../repositories");
const { AnswerService } = require("../services");

const answerService = new AnswerService(new AnswerRepository());

async function addAnswer(req, res, next) {
  try {
    const answer = await answerService.createAnswer(
      req.params.questionId,
      req.body.userId,
      req.body.text
    );
    return res.status(201).json({
      message: "Answer Created Successfully",
      success: true,
      data: answer,
    });
  } catch (err) {
    next(err);
  }
}

async function updateAnswer(req, res, next) {
  try {
    const answer = await answerService.updateAnswer(
      req.params.answerId,
      req.body.text
    );
    return res.status(200).json({
      message: "Answer Updated Successfully",
      success: true,
      data: answer,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addAnswer,
  updateAnswer,
};
