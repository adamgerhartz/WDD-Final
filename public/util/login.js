import LoginController from "../controllers/LoginController.js";

const loginController = new LoginController('login-form');
window.addEventListener('load', ()=> {
	loginController.showLoginForm();
});