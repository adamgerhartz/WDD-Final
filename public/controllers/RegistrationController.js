import RegistrationModel from "../models/RegistrationModel.js";
import RegistrationView from "../views/RegistrationView.js";

export default class RegistrationController {
	constructor(parentId) {
		this.parentElement = document.getElementById(parentId);
		this.registrationModel = new RegistrationModel();
		this.registrationView = new RegistrationView(this.parentElement);
	}

	showRegistrationForm() {
		this.registrationView.renderForm();
	}
}