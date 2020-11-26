import LoginModel from '../models/LoginModel.js';
import LoginView from '../views/LoginView.js';

export default class LoginController {
	constructor(parentId) {
		this.parentElement = document.getElementById(parentId);
		this.loginModel = new LoginModel();
		this.loginView = new LoginView(this.parentElement);
	}

	showLoginForm() {
		// TODO: render the login form
		this.loginView.renderForm();
	}
}