const Users = require("../models/users.model");

const emailValidate = async (email) => {
  const existsEmail = await Users.findOne({ email });
  if (existsEmail) {
    throw new Error(`El correo ${email} ya se encuentra registrado`);
  }
};

const existsID = async (id) => {
  const idExists = await Users.findById(id);
  if (!idExists) {
    throw new Error(`El ID ${id} no se encuentra en la base de datos`);
  }
};

module.exports = {
  emailValidate,
  existsID,
};
