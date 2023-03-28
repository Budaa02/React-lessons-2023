const User = require("../Models/user");
const ShippingAddress = require("../Models/ShippingAddress");
const Product = require("../Models/Product");
const { default: mongoose } = require("mongoose");

exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();

    const product = await Product.updateOne(
      {
        _id: "6422521072093d1b88337a5b",
      },
      {
        $inc: { quantity: -2 },
      },
      { session }
    );
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await ShippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};
exports.createTransactionWithOutSession = async (req, res) => {
  try {
    const product = await Product.updateOne(
      {
        _id: "6422521072093d1b88337a5b",
      },
      {
        $inc: { quantity: -2 },
      }
    );
    const user = await User.create(req.body.user);
    const shippingAddress = await ShippingAddress.create({
      address: req.body.shippingAddress,
      user_id: user.id,
    });
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};
