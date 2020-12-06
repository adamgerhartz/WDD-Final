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

	createError(type) {
		const span = document.createElement("span");
		span.setAttribute("id", "error");
		span.innerHTML = `<br/>Error:`;
		switch (type) {
			case 'un':
				span.innerHTML += ` Username must (1) start with a letter from the alphabet, (2) limit itself to 100 characters, and (3) contain no whitespaces.`;
				break;
			case 'inUn':
				span.innerHTML += ` Username doesn't exist in the database`;
				break;
			case 'un-e':
				span.innerHTML += ` Please enter a username`;
				break;
			case 'em-char':
				span.innerHTML += ` Email must (1) limit itself to 100 characters and (2) contain no white spaces.`;
				break;
			case 'fnm':
				span.innerHTML += ` Firstname must (1) be all alpha characters, (2) cannot start with a white space, and (3) limit itself to 100 characters.`;
				break;
			case 'pw':
				span.innerHTML += ` Please enter a password`;
				break;
			case 'inPw':
				span.innerHTML += ` Password does not match the password we have on record.`;
				break;
			default:
				span.innerHTML += '';
		}
		return span;
	}
}