import RenderHelper from "./util/RenderHelper.js";

export default class LoginView {
	constructor(parent) {
		this.parent = parent;
		this.renderHelper = new RenderHelper();
	}

	// TODO: Documentation
	renderForm() {
		this.parent.innerHTML = '';
		this.parent.appendChild(this.renderHelper.renderInputField("Username"));
		this.parent.appendChild(this.renderHelper.renderInputField("Password"));
		this.parent.appendChild(this.renderHelper.renderSubmitButton("Login"));
		this.parent.appendChild(this.renderRegistrationLink());
	}

	renderRegistrationLink() {
		const div = document.createElement("div");
		div.innerHTML = `<a href='../register.html' id='registration-link'>Create an account</a>`;
		return div;
	}
}