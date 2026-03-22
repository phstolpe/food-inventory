const { Router } = require("express");

const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController.js");

categoriesRouter.get("/", categoriesController.findAllCategories);
categoriesRouter.get("/new", categoriesController.showCreateCategoryForm);
categoriesRouter.post("/", categoriesController.createCategory);

module.exports = categoriesRouter;
