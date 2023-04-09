import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";
import React, { useState, useEffect } from "react";

const client = new ApolloClient({
	uri: "http://localhost:3001/graphql",
	cache: new InMemoryCache(),
});

const ARTWORKS_QUERY = gql`
	query {
		users {
			_id
			username
			email
			password
		}
		artworks {
			_id
			id
			artist {
				name
				story
				image
				age
			}
			categories
			created
			image_id
			lore
			price
			quantity
			title
		}
	}
`;