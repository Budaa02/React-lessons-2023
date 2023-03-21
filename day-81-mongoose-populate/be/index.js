console.log("Day-80");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");
// app.use("/todo", todoRouter);

const PORT = 8080;
const app = express();
const MONGO_CONNECTION_STRING =
  "mongodb+srv://budaa0215:F4dcf9120177@samurai0215.1e9fs28.mongodb.net/test";
app.use(express.json());
app.use(cors());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response.status(200).send("<h1>Hello Day-81 Insert/Update/Delete Many</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
