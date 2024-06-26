class CommentService {
  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }

  async createCommentOnAnswer(answerId, userId, text) {
    const comment = await this.commentRepository.createCommentOnAnswer(
      answerId,
      userId,
      text
    );
    return comment;
  }

  async createCommentOnComment(commentId, userId, text) {
    const comment = await this.commentRepository.createCommentOnComment(
      commentId,
      userId,
      text
    );
    return comment;
  }

  async likeIt(id, userId) {
    const comment = await this.commentRepository.likeIt(id, userId);
    return comment;
  }
}

module.exports = CommentService;
