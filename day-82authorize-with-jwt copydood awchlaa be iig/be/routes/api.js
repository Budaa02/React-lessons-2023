const express = require("express");
const api = express.Router();
const auth = require("../middleware/auth");

api.get("/list", (request, response) => {
  response.status(200).json({
    data: [],
  });
});
api.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: "Successfully got the protected route",
  });
});
api.post("/unprotected", auth, (request, response, next) => {
  response.status(200).json({
    data: "Successfully got the protected route",
  });
});
module.exports = api;
