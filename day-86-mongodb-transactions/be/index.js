const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { response } = require("express");
const transactionApi = require("./routes/transaction.route");
const productApi = require("./routes/product.route");

require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/transaction", transactionApi);
app.use("/product", productApi);

app.get("/", (req, res) => {
  response.json({
    data: [],
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
