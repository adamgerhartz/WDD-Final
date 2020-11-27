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
			if (event.target.value !== '') {
				const isValidUsername = this.validationHelper.isValidUsername(event.target.value);
				if (!isValidUsername && !this.loginView.isErrorDisplayed()) {
					this.loginView.renderError('un');
				} else if (isValidUsername && this.loginView.isErrorDisplayed()) {
					this.loginView.hideErrorMessages();
				}
			}
		});

		// password
		this.passwordEl.addEventListener("keydown", () => {
			this.loginView.hideErrorMessages();
		});
		// this.passwordEl.addEventListener("keyup", (event) => {
		// 	console.log(event.target.value);
		// 	if (event.target.value !== '') {
		// 		this.loginModel.hashPassword(event.target.value, (hash) => {
		// 			this.hashedPassword = hash;
		// 			console.log(this.hashedPassword);
		// 		});
				
		// 	}
		// });

		// submit
		this.parentElement.addEventListener('submit', (event) => {
			event.preventDefault();
			const username = event.target[0].value;
			const password = event.target[1].value;
			const isEmptyUsername = this.validationHelper.isEmpty(username);
			const isEmptyPassword = this.validationHelper.isEmpty(password);
			if (isEmptyUsername || isEmptyPassword || this.loginView.isErrorDisplayed()) {
				if (isEmptyUsername) {
					this.loginView.renderError('un-e');
				}
				if (isEmptyPassword) {
					this.loginView.renderError('pw');
				}
				return;
			}

			if (!isEmptyUsername && this.validationHelper.isValidUsername(username)) {
				this.loginModel.isUsername(username, (result) => {
					if (result === false) {
						this.loginView.renderError('inUn');
					} else {
						if (!isEmptyPassword && !this.loginView.isErrorDisplayed()) {
							this.loginModel.authenticatePassword(password, (result) => {
								if (result === false) {
									this.loginView.renderError("inPw");
								} else {
									window.location.href = "../home.html";
								}
							});
						}
					}
				});
			}
		});
	}
}