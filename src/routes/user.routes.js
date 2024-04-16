const express = require("express");
const { userController } = require("../controllers");

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

module.exports = userRouter;