const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

// run an express instance
express()
	.use(express.static(path.join(__dirname, "public")))
	.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});