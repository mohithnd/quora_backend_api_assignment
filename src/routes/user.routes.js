const express = require("express");
const { userController } = require("../controllers");
const { followController } = require("../controllers");

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.get("/:userId", userController.getUser);

userRouter.put("/:userId", userController.updateUser);

userRouter.post("/:userId/follow/:targetUserId", followController.followUser);

module.exports = userRouter;
