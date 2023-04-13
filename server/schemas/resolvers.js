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
		user: async (parent, args) => {
			return User.findOne({ _id: args._id });
		},
		users: async () => {
			return User.find().populate("");
		},
	},
	Mutation: {
		// Create a user
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		// Check username and password to allow user to login
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) {
				throw new AuthenticationError('No human found with this email and password!');
			}
			const correctPw = await user.isCorrectPassword(password);
			if (!correctPw) {
				throw new AuthenticationError('No human found with this email and password!');
			}
			const token = signToken(user);

			return { token, user };
		},
		// Update a user
		updateUser: async (parent, args) => {
			// console.log(args._id);
			if (args._id) {
				return await User.findByIdAndUpdate(args._id, args, { new: true });
			
			}
			throw new AuthenticationError('You do not have the privileges to update a User');
		},
		// Delete one user
		deleteUser: async (parent, args) => {
			// console.log(args._id);
			return User.findByIdAndDelete(args._id);
		}
	},
};

module.exports = resolvers;
