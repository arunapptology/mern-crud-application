import express from "express";

import { createComentFunction } from "../controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.post("/create", createComentFunction);





export default commentRouter;
