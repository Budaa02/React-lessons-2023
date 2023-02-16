console.log("day-63 Category CRUD");

// import necessary packages
const express = require("express");
const cors = require("cors");
const fs = require("fs");
// const { uuid } = require("uuidv4");

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app
  .route("/category")
  .post((request, response) => {
    const body = request.body;
    console.log(body);
    const isEdit = body.isEdit;
    const categoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });
    const categoryDataObj = JSON.parse(categoryData);
    const newCategory = {
      id: Date.now().toString(),
      name: body.catName,
    };
    categoryDataObj.push(newCategory);

    const writeCategoryData = fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(categoryDataObj)
    );
    if (writeCategoryData) {
      response.json({
        status: "File write errpr",
        data: [],
      });
    } else {
      response.json({
        status: "success",
        data: categoryDataObj,
      });
    }
    console.log(categoryData);
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  })
  .delete((request, response) => {
    const body = request.body;
    console.log(body);

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });
    const savedCategoriesObject = JSON.parse(savedCategories);

    const filteredCategories = savedCategoriesObject.filter(
      (category) => category.id != body.categoryId
    );
    console.log(filteredCategories.length);
    fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(filteredCategories)
    );
    response.json({
      status: "success",
      data: filteredCategories,
    });
  })
  .put((request, response) => {
    const body = request.body;
    console.log(body);

    const catId = body.categoryId;

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const savedCategoriesObjectArray = JSON.parse(savedCategories);
    const foundCategory = savedCategoriesObjectArray.filter(
      (category) => category.id === catId
    )[0];

    response.json({
      status: "success",
      data: foundCategory,
    });
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
