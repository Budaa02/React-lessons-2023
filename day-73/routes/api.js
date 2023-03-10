import express, { request, response } from "express";
const api_router = express.Router();

import { getPopularCategories } from "../services/category-services.js";
// import { getParentMenus } from "../services/menus-service.js";
import {
  getChildrenMenus,
  getParentCategories,
} from "../services/menus-service.js";
import { getAllProducts, search } from "../services/product-services.js";
api_router.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});
api_router.get("/menus", async (requset, response) => {
  const parentMenus = await getParentCategories();

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      // console.log(children);
      parent.children = children;
      return parent;
    })
  );

  response.status(200).send(parentMenus);
});

api_router.get("/search", async (request, response) => {
  const keyword = request.query.keyword;
  const result = await search(keyword);
  response.status(200).send(result);
});
api_router.get("/products", async (request, response) => {
  const result = await getAllProducts();
  response.status(200).send(result);
});
export default api_router;
