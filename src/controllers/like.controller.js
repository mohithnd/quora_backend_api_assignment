const { QuestionService } = require("../services");
const { AnswerService } = require("../services");
const { CommentService } = require("../services");

const { QuestionRepository } = require("../repositories");
const { AnswerRepository } = require("../repositories");
const { CommentRepository } = require("../repositories");

const questionService = new QuestionService(new QuestionRepository());
const answerService = new AnswerService(new AnswerRepository());
const commentService = new CommentService(new CommentRepository());

async function addLikeOnQuestion(req, res, next) {
  try {
    const question = await questionService.likeIt(
      req.params.id,
      req.body.userId
    );
    return res.status(201).json({
      message: "Liked Question Successfully",
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

async function addLikeOnAnswer(req, res, next) {
  try {
    const answer = await answerService.likeIt(req.params.id, req.body.userId);
    return res.status(201).json({
      message: "Liked Answer Successfully",
      success: true,
      data: answer,
    });
  } catch (err) {
    return res.json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

async function addLikeOnComment(req, res, next) {
  try {
    const comment = await commentService.likeIt(req.params.id, req.body.userId);
    return res.status(201).json({
      message: "Liked Comment Successfully",
      success: true,
      data: comment,
    });
  } catch (err) {
    return res.json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

module.exports = {
  addLikeOnQuestion,
  addLikeOnAnswer,
  addLikeOnComment,
};
