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
			if (event,target.value != '') {
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
	}
}