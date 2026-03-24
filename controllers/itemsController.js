const db = require("../db/queries");

async function findAllItems(req, res) {
	const items = await db.getItems();
	res.render("read_items", { items: items });
}

async function insertItem(req, res) {
	const { name, category_id } = req.body;
	await db.insertItem(name, category_id);
	res.redirect("/items");
}

async function showCreateItemForm(req, res) {
	const categories = await db.getCategories();
	res.render("create_items", { categories: categories });
}

function showUpdateItemForm(req, res) {
	const { id } = req.params;
	res.render("update_item", { id: id });
}

async function updateItem(req, res) {
	const { id } = req.params;
	const { newName } = req.body;
	await db.updateItem(id, newName);
	res.redirect("/items");
}

module.exports = {
	findAllItems,
	insertItem,
	showCreateItemForm,
	showUpdateItemForm,
	updateItem,

}
