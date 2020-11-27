const express = require("express");
const path = require("path");
require('dotenv').config();
const loginController = require("./controllers/loginController.js");
const PORT = process.env.PORT || 5000;

const app = express();

// run an express instance
express()
	.use(express.static(path.join(__dirname, "public")))
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.post("/hash", loginController.hash)
	.get("/username", loginController.validateUsername)
	.post("/password", loginController.validatePassword)
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});