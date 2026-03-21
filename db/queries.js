const pool = require("./pool");

async function getCategories(name) {
	const { rows } = await pool.query("SELECT * FROM categories");
	return rows;
}
async function insertCategory(name) {
	await pool.query("INSERT INTO categories (name) VALUES($1)", [name]);
}
// async function findAllCategories(){
// 	const {rows} = await pool.query();
// 	return rows;
// }
async function updateCategory(name) { }
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
