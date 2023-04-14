import "../styles/pages/showcase.css";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";
import { React, useState, useEffect } from "react";

import Auth from '../../utils/auth'

const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

const styles = {
	notLoggedInAlert: {
		margin: '0 auto',
		fontSize: '2rem',
		color: 'white',
		fontWeight: 'bolder',
		display: 'flex',
		justifyContent: 'space-evenly',
		backgroundColor: 'red',
		// textAlign: 'justify',
		width: '25%',
		marginTop: '10rem',
		padding: '2rem',
		fontFamily: 'Orbitron, sans-serif',
		minWidth: '300px',
		boxShadow: '3px 3px 5px lightgray'
	}
}

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
			const module = await import(`../../images/${artwork.image_id}.JPG`);
			setImage(module.default);
		};
		loadImage();
	}, [artwork.image_id]);
	return (
		<div onClick={() => handleClick(artwork)}>
			{image && (
				<img className="galleryImages" src={image} alt={artwork.title} title={artwork.title} />
			)}
		</div>
	);
};

const GalleryList = () => {
	const { loading, error, data } = useQuery(ARTWORKS_QUERY);
	const [selectedArtwork, setSelectedArtwork] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedArtistImage, setSelectedArtistImage] = useState(null);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const handleClick = (artwork) => {
		setSelectedArtwork(artwork);
		handleShow();

		// sets artwork image
		const loadImage = async () => {
			const module = await import(`../../images/${artwork.image_id}.JPG`);
			setSelectedImage(module.default);
		};
		loadImage();

		// sets artist image
		const loadArtistImage = async () => {
			const module2 = await import(`../../images/profile-img/${artwork.artist.image}`);
			setSelectedArtistImage(module2.default);
		};
		loadArtistImage();
		console.log(artwork.artist.image)
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		
		<div id="gallery" className="galleryMain">
			<h1 className="galleryTitle">
				Ren<span>AI</span>ssance Gallery
			</h1>
			<div className="galleryWrapper">
				{data.artworks.map((artwork) => (
					<Eachartwork artwork={artwork} key={artwork._id} handleClick={handleClick} />
				))}
			</div>
			{selectedArtwork && (
				<div className={`modalOverlay ${showModal ? "show" : ""}`} onClick={handleClose}>
					<div className="modalContainer">
						<div className="modalContent">
							<div className="modalHeader">
								<h5 className="modalTitle">
									{selectedArtwork.title}
								</h5>
							</div>
							<div className="modalBody">
								<div className="modalArtistDiv">
									<img className="artist-photo" src={selectedArtistImage} alt={selectedArtwork.artist.name}/>
									<p><span className="art-caption">Artist:</span>{" "}{selectedArtwork.artist.name}</p>
									<p><span className="art-caption">Age:</span>{" "}{selectedArtwork.artist.age}</p>
									<p><span className="art-caption">Origin:</span>{" "}{selectedArtwork.artist.story}</p>
								</div>
								<div className="modalImageDiv">
									{selectedImage && ( // conditionally render the image only when it's available
										<img className="modalImage" src={selectedImage} alt={selectedArtwork.title} title={selectedArtwork.title} />
									)}
								</div>
								<div className="modalArtworkDetailDiv">
									<p><span className="art-caption">Title:</span>{" "}{selectedArtwork.title}</p>
									<p><span className="art-caption">Created:</span>{" "}{selectedArtwork.created}</p>
									<p><span className="art-caption">Categories:</span>{" "}{selectedArtwork.categories}</p>
									<p><span className="art-caption">Price:{" "}</span>{selectedArtwork.price}</p>
									<p><span className="art-caption">Lore:</span>{" "}{selectedArtwork.lore}</p>
								</div>
							</div>
							<button className="modalCloseBtn" onClick={() => setSelectedArtwork(null)}>Back</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const Showcase = () => {
	if (Auth.loggedIn()){
	return (
		<ApolloProvider client={client}>
			<GalleryList />
		</ApolloProvider>
	);
	} else {
		return (
		<div>
		<h2 style={styles.notLoggedInAlert}> YOU MUST LOGIN TO VIEW THIS CONTENT</h2>
		</div>
		)
	}
};

export default Showcase;
