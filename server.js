const express = require("express");
const path = require("path");
require('dotenv').config();
const loginController = require("./controllers/loginController");
const registrationController = require("./controllers/registrationController");
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
	.post("/user", registrationController.addUser)
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});