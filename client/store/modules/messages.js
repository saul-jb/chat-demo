import client from "@/libs/client";

const messagesService = client.service("messages");

export default {
	namespaced: true,

	state: {
	},

	getters: {

	},

	actions: {
		createMessage ({commit}, {text, userId, channelId}) {
			return new Promise((resolve, reject) => {
				messagesService.create({
					text,
					user: userId,
					channel: channelId
				}).then(message => {
					resolve(message);
				}).catch(err => {
					reject(err);
				});
			});
		},

		getMessages ({commit}, criteria) {
			return messagesService.find({query: criteria});
		}
	},

	mutations: {

	}
};
