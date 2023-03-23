const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminApi = require("./routes/admin-api");
const api = require("./routes/api");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use("/adminApi", adminApi);
app.use("/api", api);
const MONGO_CONNECTION_STRING =
  "mongodb+srv://budaa0215:F4dcf9120177@samurai0215.1e9fs28.mongodb.net/test";

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
