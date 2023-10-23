const { Router } = require("express");
const { check } = require("express-validator");
const usersController = require("../controllers/users.controller");
const { validarCampos } = require("../middelwares/validationResult");
const { emailValidate, existsID } = require("../middelwares/validationDB");

const userRouter = Router();

userRouter.post(
  "/users",
  [
    check("email", "El correo no es valido!").isEmail(),
    check("email").custom(emailValidate),
    check("fullName", "El nombre es obligatorio!").not().isEmpty(),
    validarCampos,
  ],
  usersController.createUser
);

userRouter.get("/users", usersController.getAllUsers);

userRouter.get(
  "/users/getOne/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existsID),
    validarCampos,
  ],
  usersController.getOneUser
);

userRouter.put(
  "/users/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existsID),
    validarCampos,
  ],
  usersController.upDateUsers
);

userRouter.delete(
  "/users/delete/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existsID),
    validarCampos,
  ],
  usersController.deleteUsers
);

module.exports = userRouter;
