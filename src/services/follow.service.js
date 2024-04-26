class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async followUser(userId, targetUserId) {
    const user = await this.userRepository.followUser(userId, targetUserId);
    return user;
  }
}

module.exports = UserService;
