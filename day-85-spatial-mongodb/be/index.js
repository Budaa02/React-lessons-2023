const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const restaurantApi = require("./routes/restaurants.routes");

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurant", restaurantApi);

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
