const { Router } = require("express");

const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController.js");

categoriesRouter.get("/", categoriesController.findAllCategories);

categoriesRouter.get("/new", categoriesController.showCreateCategoryForm);
categoriesRouter.post("/", categoriesController.createCategory);

categoriesRouter.post("/:id", categoriesController.updateCategory);
categoriesRouter.get("/:id/edit", categoriesController.showUpdateCategoryForm);

categoriesRouter.post("/:id/delete", categoriesController.removeCategory);


module.exports = categoriesRouter;
