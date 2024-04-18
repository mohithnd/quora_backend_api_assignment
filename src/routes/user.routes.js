const express = require("express");
const { userController } = require("../controllers");

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.get("/:userId", userController.getUser);

module.exports = userRouter;
