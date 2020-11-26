import RegistrationController from '../controllers/RegistrationController.js';

const registrationController = new RegistrationController('registration-form');
window.addEventListener('load', () => {
	registrationController.showRegistrationForm();
});