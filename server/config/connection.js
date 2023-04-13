const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(
	
	process.env.MONGODB_URI ||
		"mongodb+srv://admin:adminpasswordadmin@robotic-renaissance.uhtmdad.mongodb.net/robotic-renaissance",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

module.exports = mongoose.connection;