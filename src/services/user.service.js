class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(userData) {
    const user = await this.userRepository.createUser(userData);
    return user;
  }
}

module.exports = UserService;
