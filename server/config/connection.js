const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb://127.0.0.1:27017/robotic_renaissance",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;