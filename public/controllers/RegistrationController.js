import RegistrationModel from "../models/RegistrationModel.js";
import RegistrationView from "../views/RegistrationView.js";
import ValidationHelper from "./util/ValidationHelper.js";

export default class RegistrationController {
	constructor(parentId) {
		this.parentElement = document.getElementById(parentId);
		this.registrationModel = new RegistrationModel();
		this.registrationView = new RegistrationView(this.parentElement);
		this.validationHelper = new ValidationHelper();
		this.usernameEl = '';
		this.emailElement = '';
		this.fNameElement = '';
		this.lNameElement = '';
		this.passwordEl = '';
	}

	showRegistrationForm() {
		this.registrationView.renderForm((unElement, emElement, fnElement, lnElement, pwElement) => {
			this.usernameEl = unElement;
			this.emailElement = emElement;
			this.fNameElement = fnElement;
			this.lNameElement = lnElement;
			this.passwordEl = pwElement;
			this.addRegistrationListeners();
		});
	}

	addRegistrationListeners() {
		// username element
		this.usernameEl.addEventListener("keydown", () => {
			this.registrationView.hideErrorMessages();
		});
		this.usernameEl.addEventListener("keyup", (event) => {
			if (event.target.value != '') {
				const isValidUsername = this.validationHelper.isValidUsername(event.target.value);
				if (!isValidUsername && !this.registrationView.isErrorDisplayed()) {
					this.registrationView.renderError('un');
				} else if (isValidUsername && this.registrationView.isErrorDisplayed()) {
					this.registrationView.hideErrorMessages();
				}
			}
		});

		// email element
		this.emailElement.addEventListener("keydown", () => {
			this.registrationView.hideErrorMessages();
		});
		this.emailElement.addEventListener("keyup", (event) => {
			if (event.target.value !== '') {
				const isPartiallyValid = this.validationHelper.isPartiallyValidEmail(event.target.value);
				if (!isPartiallyValid && !this.registrationView.isErrorDisplayed()) {
					this.registrationView.renderError("em-char");
				} else if (isPartiallyValid && this.registrationView.isErrorDisplayed()) {
					this.registrationView.hideErrorMessages();
				}
			}
		});

		// first name element
		this.fNameElement.addEventListener("keydown", () => {
			this.registrationView.hideErrorMessages();
		});
		this.fNameElement.addEventListener("keyup", (event) => {
			if (event.target.value !== '') {
				const isValidName = this.validationHelper.isValidName(event.target.value);
				if(!isValidName && !this.registrationView.isErrorDisplayed()) {
					this.registrationView.renderError('fnm');
				} else if (isValidName && this.registrationView.isErrorDisplayed()) {
					this.registrationView.hideErrorMessages();
				}
			}
		});

		// last name element
		this.lNameElement.addEventListener("keydown", () => {
			this.registrationView.hideErrorMessages();
		});
		this.lNameElement.addEventListener("keyup", (event) => {
			if (event.target.value !== '') {
				const isValidName = this.validationHelper.isValidName(event.target.value);
				if(!isValidName && !this.registrationView.isErrorDisplayed()) {
					this.registrationView.renderError('lnm');
				} else if (isValidName && this.registrationView.isErrorDisplayed()) {
					this.registrationView.hideErrorMessages();
				}
			}
		});

		// password element
		this.passwordEl.addEventListener("keydown", () => {
			this.registrationView.hideErrorMessages();
		});

		// submit
		this.parentElement.addEventListener("submit", (event) => {
			event.preventDefault();
			const username = event.target[0].value;
			const email = event.target[1].value;
			const firstname = event.target[2].value;
			const lastname = event.target[3].value;
			const password = event.targte[4].value;
			const isEmptyUsername = this.validationHelper.isEmpty(username);
			const isEmptyEmail = this.validationHelper.isEmpty(email);
			const isEmptyFirstname = this.validationHelper.isEmpty(firstname);
			const isEmptyLastname = this.validationHelper.isEmpty(lastname);
			const isEmptyPassword = this.validationHelper.isEmpty(password);
			
			// check if we are empty
			if (isEmptyUsername || isEmptyEmail || isEmptyFirstname || isEmptyLastname || isEmptyPassword || this.registrationView.isErrorDisplayed()) {
				if (isEmptyUsername) {
					this.registrationView.renderErrorMessage('un-e');
				}
				if (isEmptyEmail) {
					this.registrationView.renderErrorMessage('ea-e');
				}
				if (isEmptyFirstname) {
					this.registrationView.renderErrorMessage('fnm-e');
				}
				if (isEmptyLastname) {
					this.registrationView.renderErrorMessage('lnm-e');
				}
				if (isEmptyPassword) {
					this.registrationView.renderErrorMessage('pw-e');
				}
			}

			// check for valid email address
			const isValidEmail = this.validationHelper.isValidEmailAddress(this.email);
			if (!isValidEmail && !isEmptyEmail) {
				this.registrationView.renderErrorMessage('ea-in');
			}

			// check for unique username
			if (!isEmptyUsername && !this.registrationView.isErrorDisplayed() && isValidEmail) {
				this.registrationModel.isUsername(username, (result) => {
					if (result === true) {
						this.registrationView.renderError('inUnU');				
					} else {
						// add to DB
						this.registrationModel.addToDB(username, email, firstname, lastname, password).then((value) => {
							if (value === '1') {
								window.location.href = './registrationConfirmation.php';
							} else {
								this.registrationView.renderErrorMessage('er-upload');
							}
						});  
					}
				});
			}
		});
	}
}