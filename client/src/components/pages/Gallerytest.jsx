import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";
import React, { useState, useEffect } from "react";
import './cssForTest.css';
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

const Eachartwork = ({ artwork }) => {
	const [image, setImage] = useState(null);
	useEffect(() => {
		const loadImage = async () => {
			const module = await import(`../../images/${artwork.image_id}.JPG`);
			setImage(module.default);
		};
		loadImage();
	}, [artwork.image_id]);
    
    return (
		<div>
			{image && <img className='galleryImages' src={image} alt={artwork.title} title={artwork.title}/>}
		</div>
	);
};

const GalleryList = () => {
	const { loading, error, data } = useQuery(ARTWORKS_QUERY);
    if (loading) {
		return <div>Loading...</div>;
	}
    if (error) {
		return <div>Error: {error.message}</div>;
	}
    
	return (
		<div>
            <h1>ARTWORKS IN DATABASE</h1>
			<div className="galleryWrapper" style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', }}>
				{data.artworks.map((artwork) => (
                    <Eachartwork artwork={artwork} key={artwork._id} />
				))}
			</div>
		</div>
	);
};

const Gallerytest = () => {
	return (
		<ApolloProvider client={client}>
			<GalleryList />
		</ApolloProvider>
	);
};

export default Gallerytest;