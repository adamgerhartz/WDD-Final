import HomeModel from "../models/HomeModel.js";
import HomeView from "../views/HomeView.js";

export default class HomeController {
	constructor(parentId) {
		this.parentElement = document.getElementById(parentId);
		this.homeModel = new HomeModel();
		this.homeView = new HomeView();
	}

	showHomepage() {
		this.homeModel.fetchProfileData((data) => {
			
		});
	} 
}