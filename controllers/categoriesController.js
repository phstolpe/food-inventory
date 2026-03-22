const db = require("../db/queries");

//categories
async function findAllCategories(req, res) {
	const categories = await db.getCategories();
	res.render("read_categories", { categories: categories });
}

async function createCategory(req, res) {
	const { name } = req.body;
	await db.insertCategory(name);
	res.redirect("/categories");
}

function showCreateCategoryForm(req, res) {
	res.render("create_category", {});
}

async function updateCategory(req, res) {
	const { name } = req.body;
	await db.updateCategory(name);
	res.redirect("/categories");
}

//items

module.exports = {
	createCategory,
	findAllCategories,
	showCreateCategoryForm
}
