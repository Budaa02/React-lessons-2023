const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminApi = require("./routes/admin-api");
const api = require("./routes/api");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/adminApi", adminApi);
app.use("/api", api);

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

app.get("/", (request, response) => {
  response.status(200).send("<h1>Day-92-authorize-with-jwt</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
