const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Artist {
		name: String!
		age: Int!
		image: String!
		story: String!
	}

	type Artwork {
		_id: ID!
		id: ID!
		title: String!
		artist: Artist!
		created: String!
		price: Float!
		quantity: Int!
		image_id: String!
		lore: String!
		categories: String!
	}

	type User {
		_id: ID!
		username: String!
		email: String!
		password: String!
  }

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		artwork(_id: ID!): Artwork
		artworks: [Artwork!]!
		users: [User]
		user(_id: ID!): User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		updateUser(_id: ID!, username: String, email: String, password: String): User
		deleteUser(_id: ID!): User
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
