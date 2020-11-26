import RenderHelper from "./util/RenderHelper.js";

export default class RegistrationView {
	constructor(parent) {
		this.parent = parent;
		this.renderHelper = new RenderHelper();
	}

	renderForm() {
		this.parent.innerHTML = '';
		this.parent.appendChild(this.renderHelper.renderInputField("Username"));
		this.parent.appendChild(this.renderHelper.renderInputField("Email"));
		this.parent.appendChild(this.renderNestedDiv("full-name"));
		this.parent.appendChild(this.renderHelper.renderInputField("Password"));
		this.parent.appendChild(this.renderHelper.renderSubmitButton('Register'));
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
}