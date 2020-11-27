import RenderHelper from "./util/RenderHelper.js";
const CHILD_LENGTH = 4;

export default class LoginView {
	constructor(parent) {
		this.parent = parent;
		this.renderHelper = new RenderHelper();
	}

	// TODO: Documentation
	renderForm(callback) {
		this.parent.innerHTML = '';
		this.parent.appendChild(this.renderHelper.renderInputField("Username"));
		this.parent.appendChild(this.renderHelper.renderInputField("Password"));
		this.parent.appendChild(this.renderHelper.renderSubmitButton("Login"));
		this.parent.appendChild(this.renderRegistrationLink());
		callback(
			[...[...this.parent.children][0].children][2],  // username element
			[...[...this.parent.children][1].children][2],  // password element
			[...[...this.parent.children][2].children][0]   // submit button
		);
	}

	renderRegistrationLink() {
		const div = document.createElement("div");
		div.innerHTML = `<a href='../register.html' id='registration-link'>Create an account</a>`;
		return div;
	}

	hideErrorMessages() {
		if (this.parent.childNodes.length > CHILD_LENGTH) {
			// remove errors
			for (let i = this.parent.childNodes.length - 1, min = 3; i > min; i--) {
				this.parent.removeChild(this.parent.children[i]);
			}
		}
	}

	isErrorDisplayed() {
		if (this.parent.childNodes.length > CHILD_LENGTH) {
			return true;
		}
		return false;
	}

	renderError(type) {
		const error = this.renderHelper.createError(type);
		this.parent.appendChild(error);
	}
}