const db = require("../db/");

async function findAllCategories(req, res) {
	const categories = await db.getCategories();
	res.render("read_categories", { categories: categories });
}

async function createCategory(req, res) {
	const { name } = req.body;
	await db.insertCategory(name);
	res.redirect("/categories");
}

async function updateCategory(req, res) {
	const { name } = req.body;
	await db.updateCategory(name);
	res.redirect("/categories");
}

module.exports = {
	createCategory,
	findAllCategories,
}
