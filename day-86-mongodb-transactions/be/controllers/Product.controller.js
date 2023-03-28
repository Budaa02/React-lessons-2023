const Product = require("../Models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({ staus: true, product });
  } catch (error) {
    res.json({ status: false, error });
  }
};
