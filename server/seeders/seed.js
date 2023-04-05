const db = require("../config/connection");
const { User } = require('../models');
const { Artwork } = require("../models");
const { Categories } = require("../models");
const usersSeeds = require('./users.json');
const artworkSeeds = require("./artwork.json");
const categoriesSeeds = require("./categories.json");

db.once("open", async () => {
	try {
		// Deleting any existing collections
		await User.deleteMany({});
		await Artwork.deleteMany({});
		await Categories.deleteMany({});
		// Creating the collections
		await User.create(usersSeeds);
		await Artwork.create(artworkSeeds);
		await Categories.create(categoriesSeeds);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("========== ARTWORK SEEDING WAS SUCCESSFUL!!! ==========");
	console.log("========== CATEGORY SEEDING WAS SUCCESSFUL!!! =========");
	console.log("=========== USER SEEDING WAS SUCCESSFUL!!! ============");
	process.exit(0);
});
