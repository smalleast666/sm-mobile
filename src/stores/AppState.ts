import { observable, action } from 'mobx';
import axios from 'axios';

export default class AppState {
	@observable authenticated;
	@observable authenticating;
	@observable items;
	@observable item;

	@observable testval;

	constructor() {
		this.authenticated = false;
		this.authenticating = false;
		this.items = [];
		this.item = {};

		this.testval = 'Cobbled together by ';
	}

	async fetchData(pathname) {
		let { data } = await axios.get(`https://jsonplaceholder.typicode.com${pathname}`);
		console.log(data);
		data.length > 0 ? this.setData(data) : this.setSingle(data);
	}

	@action setData(data) {
		this.items = data;
	}

	@action setSingle(data) {
		this.item = data;
	}

	@action clearItems() {
		this.items = [];
		this.item = {};
	}
}
