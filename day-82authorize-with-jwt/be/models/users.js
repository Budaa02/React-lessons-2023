const mongoose = require("mongoose");

const adminApi = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please provide an Email!"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please provide a password!"],
    unique: false,
  },
});
const Users = mongoose.model("Users", adminApi);

module.exports = Users;
