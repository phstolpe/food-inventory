const pool = require("./pool");

async function getCategories() {
	const { rows } = await pool.query("SELECT * FROM categories");
	return rows;
}
async function insertCategory(name) {
	await pool.query("INSERT INTO categories (name) VALUES($1)", [name]);
}
async function updateCategory(id, newName) {
	await pool.query("UPDATE categories SET name = $1 WHERE id = $2", [newName, id]);
}
async function deleteCategory(name) { }

async function getItem(name) { }
async function insertItem(name) { }
async function updateItem(name) { }
async function deleteItem(name) { }

module.exports = {
	getCategories,
	insertCategory,
	updateCategory,
	deleteCategory,
	getItem,
	insertItem,
	updateItem,
	deleteItem,


};
