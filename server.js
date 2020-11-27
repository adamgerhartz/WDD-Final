const express = require("express");
const path = require("path");
const loginController = require("./controllers/loginController.js")
const PORT = process.env.PORT || 5000;

const app = express();

// run an express instance
express()
	.use(express.static(path.join(__dirname, "public")))
	.post("/hash", loginController.hash())
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});