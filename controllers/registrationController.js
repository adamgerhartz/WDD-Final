const registrationModel = require("../models/registrationModel");
const htmlspecialchars = require("htmlspecialchars");

function addUser(req, res) {
	const user = {
		username: htmlspecialchars(req.body.username),
		email: htmlspecialchars(req.body.email),
		firstname: htmlspecialchars(req.body.firstname),
		lastname: htmlspecialchars(req.body.lastname),
		password: req.body.password
	}

	registrationModel.addUser(user, (err, results) => {
		if (err) {
			console.error("Failed to add user", err);
		}
		res.json(results);
	});
}

module.exports = {
	addUser: addUser
}