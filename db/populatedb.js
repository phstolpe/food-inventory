#! /usr/bin/env node

const { Client } = require("pg");


const SQL = `
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS categories;

CREATE TABLE IF NOT EXISTS categories(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,	
   name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS items(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,	
  name TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO categories (name) 
VALUES
  ('Vegetables'),
  ('Protein'),
  ('Carbs');

INSERT INTO items(name, category_id) 
VALUES
  ('Cucumber', 1),
  ('Tofu', 2),
  ('Rice', 3);
`;

async function main() {

	const connectionString = process.argv[2];
	if (!connectionString) {
		console.error("No database connection string. Please provide one.");
		process.exit(1);
	}
	console.log("seeding...");
	const client = new Client({
		connectionString: connectionString
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();

