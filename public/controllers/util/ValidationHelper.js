const CHARACTER_LIMIT = 100;

/**
*  This class handles client side validation
**/
export default class ValidationHelper {
	isValidUsername(username) {
		if (this.isTooLong(username.length)) {
			return false;
		}

		if (!this.isAlpha(username) || this.isEmpty(username)) {
			return false;
		}

		if (this.isWhiteSpace(username)) {
			return false;
		}

		return true;
	}

	isPartiallyValidEmail(email) {
		if (this.isTooLong(email.length)) {
			return false;
		}

		if (this.isWhiteSpace(email)) {
			return false;
		}

		return true;
	}

	isValidName(name) {
		if (this.isTooLong(name.length)) {
			return false;
		}

		if (this.isWhiteSpaceFront(name)) {
			return false;
		}

		const regName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
		if (!regName.test(name)) {
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
		if (!(Number.isNaN(char))) {
			return false;
		}
		return true;
	}

	isTooLong(length) {
		if (length > CHARACTER_LIMIT) {
			return true;
		}
		return false;
	}

	isWhiteSpace(str) {
		return str.indexOf(' ') >= 0;
	}

	isWhiteSpaceFront(str) {
		const char = str.charCodeAt(0);
		console.log(char);
		if (char === parseInt('32')) {
			return true;
		}
		return false;
	}
}