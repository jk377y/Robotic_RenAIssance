const db = require("../config/connection");
const { User } = require('../models');
const { Artwork } = require("../models");
const usersSeeds = require('./users.json');
const artworkSeeds = require("./artwork.json");

db.once("open", async () => {
	try {
		// Deleting any existing collections
		await User.deleteMany({});
		await Artwork.deleteMany({});
		// Creating the collections
		await User.create(usersSeeds);
		await Artwork.create(artworkSeeds);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}

	console.log("========== ARTWORK SEEDING WAS SUCCESSFUL!!! ==========");
	console.log("=========== USER SEEDING WAS SUCCESSFUL!!! ============");
	process.exit(0);
});
