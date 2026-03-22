const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const categoriesRouter = require("./routes/categoriesRouter");

app.use(express.urlencoded({ extended: true }));

app.use("/categories", categoriesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
	console.log(`Groceries inventory - listening on port ${PORT}!`);
});

