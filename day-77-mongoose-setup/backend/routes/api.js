const express = require("express");
const User = require("../models/Users");
const Router = express.Router();

Router.get("/users", async (request, response) => {
  const result = await User.find({});
  console.log(result);
  response.json({ data: result });
  //   User.find({}, (err, data) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       response.json({ data: data });
  //     }
  //   });
});
Router.post("/user", async (request, response) => {
  const body = request.body;

  const newUser = new User(body);

  const result = await newUser.save();
  console.log(result);

  response.json({
    data: result,
  });
});
Router.delete("/user", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await User.findOneAndDelete({ _id: body.id });
  response.json({ data: result });
});

module.exports = Router;
