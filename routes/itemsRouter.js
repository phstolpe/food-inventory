const { Router } = require("express");

const itemsRouter = Router();
const itemsController = require("../controllers/itemsController.js");

itemsRouter.get("/", itemsController.findAllItems);

itemsRouter.get("/new", itemsController.showCreateItemForm);
itemsRouter.post("/", itemsController.insertItem);


module.exports = itemsRouter;
