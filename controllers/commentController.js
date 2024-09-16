import commentModel from "../models/commentModel.js";

const createComentFunction = async (req, res) => {
  const { comment } = req.body;
  const commentData = await commentModel.create({ comment });
  res
    .status(200)
    .send({ success: true, message: "request working", commentData });
};

export { createComentFunction };
