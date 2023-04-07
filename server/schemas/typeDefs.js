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
		artist: [Artist!]!
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

	input ArtistInput {
		name: String!
		age: Int!
		image: String!
		story: String!
	}

	input ArtworkInput {
		title: String!
		artist: [ArtistInput!]!
		price: Float!
		quantity: Int!
		image_id: String!
		lore: String!
		categories: String!
	}

	type Query {
		artwork(_id: ID!): Artwork
		artworks: [Artwork!]!
		user(_id: ID!): User
		users: [User!]!
	}

	type Mutation {
		createArtwork(input: ArtworkInput!): Artwork!
		updateArtwork(_id: ID!, input: ArtworkInput!): Artwork!
		deleteArtwork(_id: ID!): Artwork!
	}
`;

module.exports = typeDefs;
