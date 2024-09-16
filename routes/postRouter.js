import express from "express";

import { createPostFunction } from "../controllers/postControllers.js";

const postRouter = express.Router();

postRouter.post("/create", createPostFunction);

export default postRouter;
