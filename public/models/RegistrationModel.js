export default class RegistrationModel {
	
	isUsername(username, callback) {
		$.get("/username", {username: username}, (results) => {
			callback(results);
		});
	}

	hashPassword(password, sendHashBack) {
		// we want to hash this password on the server side
		$.post("/hash", {password: password}, (hash) => {
			sendHashBack(hash);
		});
	}

	addToDB(username, email, firstname, lastname, password, callback) {
		this.hashPassword(password, (hash) => {
			$.put("/user", {
				username: username,
				email: email,
				firstname: firstname,
				lastname: lastname,
				password: hash
			}, (results) => {
				callback(results);
			});
		});
	}
}