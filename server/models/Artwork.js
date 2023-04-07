const { Schema, model, SchemaType } = require("mongoose");

const artistSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	story: {
		type: String,
		required: true,
	},
});

const artworkSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	title: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	artist: {
		type: [artistSchema],
		required: true,
	},
	created: {
		type: String,
		required: true,
		unique: false,
		trim: true
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
		required: true,
	},
	categories: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
});

const Artwork = model("Artwork", artworkSchema);

module.exports = Artwork;
