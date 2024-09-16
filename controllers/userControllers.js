import userModel from "../models/userModel.js";

const createUserFunction = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(500)
        .send({ success: false, message: "all fields are required" });
    }

    const isEmailExist = await userModel.findOne({ email });

    if (isEmailExist) {
      return res
        .status(400)
        .send({ success: false, message: "user Already exist" });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });

    res.status(200).send({ success: true, message: "request working", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error", error });
  }
};

const showUserFunction = async (req, res) => {
  try {
    const listUSers = await userModel.find({});

    res
      .status(200)
      .send({ success: true, message: "request working", listUSers });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error", error });
  }
};

const deleteUserFunction = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModel.findByIdAndDelete(id);

    res
      .status(200)
      .send({ success: true, message: "request working", deleteUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error", error });
  }
};

export { createUserFunction, showUserFunction, deleteUserFunction };
