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
	const id = req.params.id;
	const { newName } = req.body;
	await db.updateCategory(id, newName);
	res.redirect("/categories");
}

function showUpdateCategoryForm(req, res) {
	const { id } = req.params;
	res.render("update_category", { id: id });
}

//items

module.exports = {
	createCategory,
	findAllCategories,
	showCreateCategoryForm,
	updateCategory,
	showUpdateCategoryForm
}
