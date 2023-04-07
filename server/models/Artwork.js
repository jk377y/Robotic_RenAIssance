const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const artworkSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	artist: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	created: {
		type: Date,
		default: Date.now,
		set: (createdAtVal) => new Date(createdAtVal),
		get: (createdAtVal) =>
			new Date(createdAtVal).toLocaleDateString("en-US"),
	},
	price: {
		type: Number,
		required: true,
		unique: false,
		trim: true,
	},
	quantity: {
		type: Number,
		required: true,
		unique: false,
		trim: true,
	},
	storage_id: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
    lore: {
        type: String,
        required: false,
    },
	categories: [
		{
			type: String,
			required: true,
			unique: false,
			trim: true,
		},
	],
});

const Artwork = model("Artwork", artworkSchema);

module.exports = Artwork;