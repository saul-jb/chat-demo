import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import channels from "./modules/channels";
import messages from "./modules/messages";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		channels,
		messages
	},

	state: {

	},

	getters: {

	},

	actions: {

	},

	mutations: {

	}
});
