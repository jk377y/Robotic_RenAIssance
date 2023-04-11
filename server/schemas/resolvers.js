const { AuthenticationError } = require("apollo-server-express");
const Artwork = require("../models/Artwork");
const User = require("../models/User");
const { signToken } = require('../utils/auth');

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
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { username, password }) => {
			const user = await User.findOne({ username });
			if (!user) {
				throw new AuthenticationError('No human found with this username and password!');
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError('No human found with this username and password!');
			}
			const token = signToken(user);

			return { token, user };
		},
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
