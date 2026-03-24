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
async function deleteCategory(name) {
	const { rows } = await pool.query("SELECT * FROM items");
	return rows;
}

async function getItems() {
	const { rows } = await pool.query("SELECT items.name, items.id, categories.name AS category_name FROM items JOIN categories ON items.category_id = categories.id");
	return rows;
}
async function insertItem(name, category_id) {
	await pool.query("INSERT INTO items (name, category_id) VALUES($1, $2)", [name, category_id]);
}
async function updateItem(id, newName) {
	await pool.query("UPDATE items SET name = $1 WHERE id = $2", [newName, id]);
}
async function deleteItem(id) {
	await pool.query("DELETE FROM items where id = $1", [id]);
}

module.exports = {
	getCategories,
	insertCategory,
	updateCategory,
	deleteCategory,
	getItems,
	insertItem,
	updateItem,
	deleteItem,


};
