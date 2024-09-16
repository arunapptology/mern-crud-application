import postModel from "../models/postModel.js";

const createPostFunction = async (req, res) => {
  const { title, description } = req.body;
  const post = await postModel.create({
    title,
    description,
  });

  res.status(200).send({ success: true, message: "request working", post });
};

export { createPostFunction };
