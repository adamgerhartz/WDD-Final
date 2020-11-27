const USERNAME_CHARACTER_LIMIT = 100;

/**
*  This class handles client side validation
**/
export default class ValidationHelper {
	isValidUsername(username) {
		if (username.length > USERNAME_CHARACTER_LIMIT) {
			return false;
		}

		if (!this.isAlpha(username) && this.isEmpty(username)) {
			return false;
		}

		if (this.isWhiteSpace(username)) {
			return false;
		}

		return true;
	}

	isAlpha(str) {
		// little ascii logic
		const char = str.charCodeAt(0);
		if (!(char > 64 && char < 91) &&    // if we aren't A-Z AND
			!(char > 96 && char < 123)) {   // if we aren't a-z
			return false;
		}
		return true;
	}

	isEmpty(str) {
		const char = str.charCodeAt(0);
		is (!(Number.isNaN(char))) {
			return false;
		}
		return true;
	}

	isWhiteSpace(str) {
		return str.indexOf(' ') >= 0;
	}
}