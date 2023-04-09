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

const Eachartwork = ({ artwork, handleClick }) => {
	const [image, setImage] = useState(null);
	useEffect(() => {
		const loadImage = async () => {
			const module = await import(`../images/${artwork.image_id}.JPG`);
			setImage(module.default);
		};
    loadImage();
	}, [artwork.image_id]);
	return (
		<div onClick={() => handleClick(artwork)}>
			{image && (<img className="galleryImages" src={image} alt={artwork.title} title={artwork.title} />)}
		</div>
	);
};

const GalleryList = () => {
	const { loading, error, data } = useQuery(ARTWORKS_QUERY);
	const [selectedArtwork, setSelectedArtwork] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null); // new state variable to hold the image
  
  const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const handleClick = (artwork) => {
	  setSelectedArtwork(artwork);
	  handleShow();
    const loadImage = async () => {
      const module = await import(`../images/${artwork.image_id}.JPG`);
      setSelectedImage(module.default); // set the selected image as state
      };
      loadImage();
    };