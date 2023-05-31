const Users = require("../models/user");

const getAllUsers = async (_req, res) => {
  try {
    const data = await Users.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = { getAllUsers: getAllUsers, registerUser: registerUser };