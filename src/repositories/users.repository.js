const UsersModel = require('../models/users.model');

const create = async (fullName) => {
    const newUser = new UsersModel({
        fullName
    });
    return await newUser.save();
};

const getAll = async () => {
    return await UsersModel.find();
}

module.exports = {
    create,
    getAll
}