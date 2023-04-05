const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const categoriesSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
});

const Categories = model("Categories", categoriesSchema);

module.exports = Categories;