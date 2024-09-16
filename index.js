import express from "express";

import connectDB from "./config/db.js";

import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRouter.js";
import commentRouter from "./routes/commentRouter.js";

const app = express();

connectDB();

app.use(express.json());

//http://localhost:8000

app.use("/users", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(8000, function () {
  console.log("Server is running");
});
