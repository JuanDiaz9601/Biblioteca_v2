const { Schema, model } = require("mongoose");

const UsersModel = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  fullName: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  states: { type: Schema.Types.Boolean, default: true },
});

UsersModel.methods.toJSON = function () {
  const { __v, ...user } = this.toObject();
  return user;
};

module.exports = model("Users", UsersModel);
