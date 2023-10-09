const { getAll, create } = require('../repositories/users.repository');

const createUser = async (req, res) => {
    try {
        const { fullName } = req.body;
        const user = await create(fullName);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await getAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers
}