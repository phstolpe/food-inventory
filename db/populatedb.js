#! /usr/bin/env node

const { Client } = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS categories(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,	
name VARCHAR ( 255 )
);

INSERT INTO categories (name) 
VALUES
  ('Vegetables'),
  ('Protein'),
  ('Carbs');
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: process.env.CONN
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();

