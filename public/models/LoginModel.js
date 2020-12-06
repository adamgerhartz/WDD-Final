export default class LoginModel {

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
