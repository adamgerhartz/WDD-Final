import HomeController from "../controllers/HomeController.js";

const homeController = new HomeController("main-page");
window.addEventListener("load", () => {
	homeController.showHomepage();
});