import RenderHelper from "./util/RenderHelper.js";
const CHILD_LENGTH = 4;

export default class RegistrationView {
	constructor(parent) {
		this.parent = parent;
		this.renderHelper = new RenderHelper();
	}

	renderForm(callback) {
		this.parent.innerHTML = '';
		this.parent.appendChild(this.renderHelper.renderInputField("Username"));
		this.parent.appendChild(this.renderHelper.renderInputField("Email"));
		this.parent.appendChild(this.renderNestedDiv("full-name"));
		this.parent.appendChild(this.renderHelper.renderInputField("Password"));
		this.parent.appendChild(this.renderHelper.renderSubmitButton('Register'));
		callback(
			[...[...this.parent.children][0].children][2], // username element
			[...[...this.parent.children][1].children][2], // email element
			[...[...[...this.parent.children][2].children][0].children][2], // first name element
			[...[...[...this.parent.children][2].children][1].children][2], // last name element
			[...[...this.parent.children][3].children][2] // password element
		);
	}

	renderNestedDiv(id) {
		const div = document.createElement("div");
		div.setAttribute("id", id);
		div.innerHTML = (`
			<div id='firstNameContainer'>
			  <label for='firstname'>First Name:</label><br/>
			  <input type='text' class='light form-control' name='firstname' autocomplete='off'>
			</div>
			<div id='lastNameContainer'>
			  <label for='lastname'>Last Name:</label><br/>
			  <input type='text' class='light form-control' name='lastname' autocomplete='off'>
			</div>
		`);
		return div;
	}

	hideErrorMessages() {
		if (this.parent.childNodes.length > CHILD_LENGTH) {
			// remove errors
			for (let i = this.parent.childNodes.length - 1, min = CHILD_LENGTH - 1; i > min; i--) {
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