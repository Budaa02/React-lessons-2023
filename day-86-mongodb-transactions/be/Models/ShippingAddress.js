const mongoose = require("mongoose");

const shippingAddress = new mongoose.Schema({
  address: {
    type: String,
    require: true,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});
const Shipping = mongoose.model("Shipping", shippingAddress);

module.exports = Shipping;
