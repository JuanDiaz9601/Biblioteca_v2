const  { Schema, model } = require('mongoose');


const UsersModel = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    fullName: { type: Schema.Types.String, required: true },
});

module.exports = model('Users', UsersModel);