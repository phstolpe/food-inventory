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

module.exports = {
	findAllItems,
	insertItem,
	showCreateItemForm

}
