const { UserRepository } = require("../repositories");
const { UserService } = require("../services");

const userService = new UserService(new UserRepository());

async function addUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      message: "User Created Successfully",
      success: true,
      data: user,
    });
  } catch (err) {
    return res.json({
      message: "Something Went Wrong",
      success: false,
      error: err,
    });
  }
}

async function getUser(req, res, next) {}

async function updateUser(req, res, next) {}

module.exports = {
  addUser,
  getUser,
  updateUser,
};
