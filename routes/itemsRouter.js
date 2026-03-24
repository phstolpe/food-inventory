const { Router } = require("express");

const itemsRouter = Router();
const itemsController = require("../controllers/itemsController.js");

itemsRouter.get("/", itemsController.findAllItems);

itemsRouter.get("/new", itemsController.showCreateItemForm);
itemsRouter.post("/", itemsController.insertItem);

itemsRouter.post("/:id", itemsController.updateItem);
itemsRouter.get("/:id/edit", itemsController.showUpdateItemForm);

itemsRouter.post("/:id/delete", itemsController.removeItem);


module.exports = itemsRouter;
