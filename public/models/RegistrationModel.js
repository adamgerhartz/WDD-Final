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
			$.post("/user", {
				username: username,
				email: email,
				firstname: firstname,
				lastname: lastname,
				password: hash
			}, (results) => { 
				if (results.success) {
					callback(true);
				} else {
					callback(false);
				}
			});
		});
	}
}