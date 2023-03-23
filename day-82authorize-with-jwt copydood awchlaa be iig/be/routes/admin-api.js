const express = require("express");
const Users = require("../models/users");
const adminApi = express.Router();
// const admin = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminApi.get("/list", (request, response) => {
  response.status(200).json({
    data: [],
  });
});
adminApi.post("/register", async (request, response) => {
  const { email, password } = request.body;
  const oldUser = Users.findOne({ email: email });

  const hashedPassword = await bcrypt.hash(password, 10);
  if (oldUser) {
    Users.create({ email: email, password: hashedPassword })
      .then((data) => {
        response.status(201).json({
          message: "Hereglegch amjilttai uuslee",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        response.status(500).json({
          success: false,
          error,
        });
      });
  } else {
    return response.json({ error: "Input field is empty" });
  }
});
adminApi.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!(email && password)) {
      response.status(400).json({
        message: "buruu bn",
      });
    }
    const user = await Users.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user?.password);
      if (user && isMatch) {
        const jwtBody = { user_id: user._id, email: email };
        const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", {
          expiresIn: "24h",
        });
        response.status(200).json({
          success: true,
          status: "Amjilttai newterlee",
          data: user,
          token: token,
        });
        return;
      }
    } else {
      response.status(400).json({
        success: false,
        status: "nuuts ug ner hoorondoo taarahgui baina",
      });
      return;
    }
  } catch (error) {
    response.status(500).json({
      data: "aldaa garlaa",
      error: error,
    });
  }
});

module.exports = adminApi;
