export default class RenderHelper {

	renderInputField(child) {
		const div = document.createElement("div");
		div.innerHTML = (`
			<label for='${child.toLowerCase()}'>${child}</label><br/>
			<input type='${child === 'Password' ? 'password' : 'text'}' class='light form-control' name='${child.toLowerCase()}' autocomplete='off'>
		`);
		return div;
	}

	renderSubmitButton(value) {
		const div = document.createElement("div");
		div.innerHTML = `<input type='submit' class='btn light btn-primary' name='submit' value='${value}'>`;
		return div;
	}
}