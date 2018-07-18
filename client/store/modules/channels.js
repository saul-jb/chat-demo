import client from "@/libs/client";

const channelService = client.service("channels");

export default {
	namespaced: true,

	state: {
		channels: []
	},

	getters: {

	},

	actions: {
		getChannels ({commit}, criteria) {
			return new Promise((resolve, reject) => {
				console.log({query: criteria});
				channelService.find({query: criteria}).then(result => {
					resolve(result);
				}).catch(err => {
					reject(err);
				});
			});
		},

		createChannel ({commit}, {title, userId}) {
			return new Promise((resolve, reject) => {
				channelService.create({
					title,
					admins: [userId]
				}).then(user => {
					resolve(user);
				}).catch(err => {
					reject(err);
				});
			});
		}
	},

	mutations: {

	}
};
