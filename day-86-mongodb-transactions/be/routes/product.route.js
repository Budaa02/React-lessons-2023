const { Router } = require("express");
const { createProduct } = require("../controllers/Product.controller");

const route = Router();

route.post("/create", createProduct);

module.exports = route;
