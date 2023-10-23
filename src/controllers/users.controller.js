const { request, response } = require("express");
const {
  getAll,
  create,
  upDate,
  getOne,
  deleteUser,
} = require("../repositories/users.repository");

const createUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;

    const user = await create(fullName, email);
    res.status(201).json({ message: "Usuario creado correctamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { limit, start } = req.query;

    const users = await getAll(limit, start);

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;

  const user = await getOne(id);

  res.json({ user });
};

const upDateUsers = async (req = request, res) => {
  try {
    const { id } = req.params;
    const { _id, email, ...rest } = req.body;

    const userUpDate = await upDate(id, rest);
    res.json(userUpDate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;

  const userStates = await deleteUser(id);
  res.json({ message: "Usuario eliminado de la base de datos" });
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  upDateUsers,
  deleteUsers,
};
