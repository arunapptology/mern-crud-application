import express from "express";

import {
  createUserFunction,
  showUserFunction,
  deleteUserFunction,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/create", createUserFunction);
userRouter.get("/list", showUserFunction);
userRouter.get("/delete/:id", deleteUserFunction);

export default userRouter;
