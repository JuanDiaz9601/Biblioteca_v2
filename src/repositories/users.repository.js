const UsersModel = require("../models/users.model");

const create = async (fullName, email) => {
  const newUser = new UsersModel({
    fullName,
    email,
  });

  return await newUser.save();
};

const getAll = async (limit, start) => {
  return await UsersModel.find({ states: true }).limit(limit).skip(start);
};

const getOne = async (id) => {
  return await UsersModel.findById(id);
};

const upDate = async (id, fullName) => {
  return await UsersModel.findByIdAndUpdate(id, fullName, { new: true });
};

const deleteUser = async (id) => {
  return await UsersModel.findByIdAndUpdate(
    id,
    { states: false },
    {
      new: true,
    }
  );
};

module.exports = {
  create,
  getAll,
  getOne,
  upDate,
  deleteUser,
};
