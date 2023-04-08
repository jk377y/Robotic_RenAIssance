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

// gql query to get all data from our database
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

// This code defines a functional component called Artwork that takes a single prop called artwork. Inside the component, it uses the useState hook to create a state variable called image with an initial value of null, and a function called setImage that can be used to update the image state.
// The component also uses the useEffect hook to asynchronously load the image associated with the current artwork prop. The useEffect hook takes a function as its first argument, which in this case is defined as an asynchronous function called loadImage.
// Inside loadImage, it uses the dynamic import() statement to asynchronously load the image file associated with the current artwork.image_id prop. Once the module has been loaded, it updates the image state with the module.default value, which is the default export of the module, in this case the image file.
// The useEffect hook also takes a dependency array as its second argument, which in this case is [artwork.image_id]. This means that the effect will only be re-run if the artwork.image_id prop changes, which ensures that the correct image is always loaded for the current artwork prop.
const Artwork = ({ artwork }) => {
	const [image, setImage] = useState(null);
	useEffect(() => {
		const loadImage = async () => {
			const module = await import(`../../images/${artwork.image_id}.JPG`);
			setImage(module.default);
		};
		loadImage();
	}, [artwork.image_id]);

	const style = { width: "100px", height: "100px" };

	return (
		<div>
			<h2>{artwork.title}</h2>
			{image && <img src={image} style={style} alt={artwork.title} />}
			<p>_id: {artwork._id}</p>
			<p>id: {artwork.id}</p>
			<p>artist name: {artwork.artist[0].name}</p>
			<p>artist story: {artwork.artist[0].story}</p>
			<p>artist image: {artwork.artist[0].image}</p>
			<p>artist age: {artwork.artist[0].age}</p>
			<p>category: {artwork.categories}</p>
			<p>created: {artwork.created}</p>
			<p>price: {artwork.price}</p>
			<p>quantity: {artwork.quantity}</p>
			<p>lore: {artwork.lore}</p>
		</div>
	);
};

// This code defines a functional component called ArtworksList that uses the useQuery hook to execute the ARTWORKS_QUERY query. The useQuery hook takes a GraphQL query as its first argument and returns an object with three properties: loading, error, and data. The loading property is true while the query is in progress, the error property is set if an error occurs, and the data property contains the result of the query once it has completed.
const ArtworksList = () => {
	const { loading, error, data } = useQuery(ARTWORKS_QUERY);
    if (loading) {
		return <div>Loading...</div>;
	}
    if (error) {
		return <div>Error: {error.message}</div>;
	}
	const style1 = { margin: "5rem" };
	return (
		<div>
			<div styles={style1}>
				<h1>USERS IN DATABASE</h1>
				{data.users.map((user) => (
					<div key={user._id}>
						<h2>Username: {user.username}</h2>
						<p>email: {user.email}</p>
						<p>password: {user.password}</p>
						<p>_id: {user._id}</p>
					</div>
				))}
			</div>
			<div styles={style1}>
				<h1>ARTWORKS IN DATABASE</h1>
				{data.artworks.map((artwork) => (
                    // the Artwork component was defined above and is used here; .map for each artwork in the artworks array
					<Artwork artwork={artwork} key={artwork._id} />
				))}
			</div>
		</div>
	);
};

export const Gql = () => {
	return (
		<ApolloProvider client={client}>
			<ArtworksList />
		</ApolloProvider>
	);
};
