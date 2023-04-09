const Artwork = require("../models/Artwork");
const User = require("../models/User");

const resolvers = {
	Query: {
		artwork: async (parent, { id }) => {
			return await Artwork.findById(id);
		},
		artworks: async () => {
			return await Artwork.find();
		},
		user: async (parent, { username }) => {
			return User.findOne({ username }).populate("");
		},
		users: async () => {
			return User.find().populate("");
		},
	},
	Mutation: {
		createArtwork: async (parent, { input }) => {
			const artwork = new Artwork(input);
			await artwork.save();
			return artwork;
		},
		updateArtwork: async (parent, { id, input }) => {
			const artwork = await Artwork.findByIdAndUpdate(id, input, {
				new: true,
			});
			return artwork;
		},
		deleteArtwork: async (parent, { id }) => {
			const artwork = await Artwork.findByIdAndDelete(id);
			return artwork;
		},
	},
};

module.exports = resolvers;
