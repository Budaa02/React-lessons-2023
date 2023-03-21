const express = require("express");
const Todo = require("../models/Todo");
const todoRouter = express.Router();
todoRouter.get("/list", async (request, response) => {
  const result = await Todo.find({}).populate("category");

  response.status(200).json({
    data: result,
  });
});

todoRouter.post("/create", async (request, response) => {
  const body = request.body;
  const todo = await Todo.create(body);

  const result = await todo.populate("category");

  response.status(200).json({
    data: result,
  });
});

todoRouter.put("/update", async (request, response) => {
  const { filter, query } = request.body;
  // console.log(body[0].checked);
  // console.log(body[1].name);

  const result = await Todo.updateMany(query, { $set: filter });

  response.status(200).json({
    data: result,
  });
});

todoRouter.delete("/delete", async (request, response) => {
  const body = request.body;

  const result = await Todo.deleteMany(body);
  response.status(200).json({
    data: result,
  });
});

module.exports = todoRouter;
