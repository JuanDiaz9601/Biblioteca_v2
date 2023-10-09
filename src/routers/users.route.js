const { Router } = require('express');
const usersController = require('../controllers/users.controller');

const userRouter = Router();

userRouter.post('/users', usersController.createUser);

userRouter.get('/users', usersController.getAllUsers);

module.exports = userRouter;