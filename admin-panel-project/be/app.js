// console.log("it is my app.js");
// import necassary module
import express from "express";
// import user_role_router from "./routes/budaadb.js";
import user_role_router from "./routes/budaadb.js";
// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");

/// configuration of modules
const app = express();
const PORT = 8080;

// app.use(cors());
app.use(express.json());
app.use(user_role_router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
