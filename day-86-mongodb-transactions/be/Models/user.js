const mongoose = require("mongoose");

const adminApi = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide an Email!"],
    unique: false,
  },
});
const Users = mongoose.model("Users", adminApi);
module.exports = Users;
