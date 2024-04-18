class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(userData) {
    const user = await this.userRepository.createUser(userData);
    return user;
  }

  async getUser(userId) {
    const user = await this.userRepository.getUser(userId);
    if (user === null) {
      throw "User Not Found";
    }
    return user;
  }

  async updateUser(userId, username, email, bio) {
    const user = await this.userRepository.updateUser(
      userId,
      username,
      email,
      bio
    );
    return user;
  }
}

module.exports = UserService;
