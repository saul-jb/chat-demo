import client from "@/libs/client";

const messagesService = client.service("messages");

export default {
	namespaced: true,

	state: {
		svc: messagesService
	},

	getters: {

	},

	actions: {

	},

	mutations: {

	}
};
