const loginModel = require("../models/loginModel.js")
const bcrypt = require("bcrypt");
const saltRounds = 10;


function hash(req, res) {
	console.log("Hashing password...");
	const password = req.body.password;
	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(password, salt, (err, hash) => {
			if (err) {
				console.error("Error hashing password", err);
			}
			res.send(hash);
		});
	});
}

function validateUsername(req, res) {
	const username = req.query.username;

	loginModel.validateUsername(username, (err, results) => {
		res.send(results);
	});

}

function validatePassword(req, res) {
	const username = req.body.username;
	const password = req.body.password;

	// Fetch the password hash from the db
	loginModel.fetchPasswordByUsername(username, (err, results) => {
		if (err) {
			throw err;
		}
		const hash = results.list[0].password;
		bcrypt.compare(password, hash, (err, result) => {
    		if (result === true) {
    			res.send(true);
    		} else {
    			res.send(false);
    		}
		});
	});

}

module.exports = {
	hash: hash,
	validateUsername: validateUsername,
	validatePassword: validatePassword
}