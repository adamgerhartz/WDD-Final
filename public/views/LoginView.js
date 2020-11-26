export default class LoginView {
	constructor(parent) {
		this.parent = parent;
	}

	// TODO: Documentation
	renderForm() {
		this.parent.innerHTML = '';
		this.parent.appendChild(this.renderInputField("Username"));
		this.parent.appendChild(this.renderInputField("Password"));
		this.parent.appendChild(this.renderSubmitButton());
		this.parent.appendChild(this.renderRegistrationLink());
	}

	renderInputField(child) {
		const div = document.createElement("div");
		div.innerHTML = (`
			<label for='${child.toLowerCase()}'>${child}</label><br/>
			<input type='${child === 'Password' ? 'password' : 'text'}' class='light form-control' name='${child.toLowerCase()}' autocomplete='off'>
		`);
		return div;
	}

	renderSubmitButton() {
		const div = document.createElement("div");
		div.innerHTML = `<input type='submit' class='btn light btn-primary' name='submit' value='Login'>`;
		return div;
	}

	renderRegistrationLink() {
		const div = document.createElement("div");
		div.innerHTML = `<a href='../register.html' id='registration-link'>Create an account</a>`;
		return div;
	}


}