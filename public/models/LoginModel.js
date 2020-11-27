export default class LoginModel {
	hashPassword(password, sendHashBack) {
		// we want to hash this password on the server side
		$.post("/hash", {password: password}, (hash) => {
			sendHashBack(hash);
		});
	}

	isUsername(username, callback) {
		$.get("/username", {username: username}, (results) => {
			callback(results);
		});
	}
	
	authenticatePassword(username, password, callback) {
		$.post("/password", {username: username, password: password}, (results) => {
			callback(results);
		});
	}
}
