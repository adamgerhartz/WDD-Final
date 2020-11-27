import LoginModel from '../models/LoginModel.js';
import LoginView from '../views/LoginView.js';
import ValidationHelper from './util/ValidationHelper.js';

export default class LoginController {
	constructor(parentId) {
		this.parentElement = document.getElementById(parentId);
		this.loginModel = new LoginModel();
		this.loginView = new LoginView(this.parentElement);
		this.validationHelper = new ValidationHelper();
		this.usernameEl = '';
		this.passwordEl = '';
		this.submitEl = '';
		this.usernameInput = '';
	}

	showLoginForm() {
		this.loginView.renderForm((unElement, pwElement, submitElement) => {
			this.usernameEl = unElement;
			this.passwordEl = pwElement;
			this.submitEl = submitElement;
			this.addLoginListeners();
		}); 
	}

	addLoginListeners() {
		// username
		this.usernameEl.addEventListener('keydown', () => {
			this.loginView.hideErrorMessages(); 
		});
		this.usernameEl.addEventListener('keyup', (event) => {
			this.usernameInput = event.target.value;
			if (this.usernameInput !== '') {
				const isValidUsername = this.validationHelper.isValidUsername(this.usernameInput);
				if (!isValidUsername && !this.loginView.isErrorDisplayed()) {
					this.LoginView.renderError('username');
				} else if (isValidUsername && this.loginView.isErrorDisplayed()) {
					this.loginView.hideErrorMessages();
				}
			}
		});

		// password
		this.passwordEl.addEventListener("keydown", () => {
			this.LoginView.hideErrorMessages();
		});
		this.passwordEl.addEventListener("keyup", () => {
			if (event.target.value !== '') {
				this.hashedPassword = this.loginModel.hashPassword(event.target.value);
			}
		});
	}
}