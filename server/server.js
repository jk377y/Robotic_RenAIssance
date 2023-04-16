const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the React build directory
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}

//! Switch to this for working with GQL sandbox
// app.get("/", (req, res) => {
// 	res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

//! Switch to this for Heroku deployment
// sets up a get route for any (*) url requested
app.get("*", (req, res) => {
	let url = path.join(__dirname, "../client/build", "index.html");
	if (!url.startsWith("/app/"))
		// since we're on local windows
		url = url.substring(1);
	res.sendFile(url);
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	server.applyMiddleware({ app });

	// Start listening for incoming requests
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
		console.log(
			`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
		);
	});

	db.once("open", () => {
		console.log("Connected to MongoDB database.");
	});
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
