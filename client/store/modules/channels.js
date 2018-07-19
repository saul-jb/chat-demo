import client from "@/libs/client";

const channelService = client.service("channels");

export default {
	namespaced: true,

	state: {
		channels: [],
		currentChannel: null
	},

	getters: {

	},

	actions: {
		getChannels ({commit}, criteria) {
			return new Promise((resolve, reject) => {
				channelService.find({query: criteria}).then(result => {
					commit("setChannels", result.data);

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
				}).then(channel => {
					resolve(channel);
				}).catch(err => {
					reject(err);
				});
			});
		},

		joinChannel ({commit}, channelId) {
			// This handles the logic for a user joining a channel
			// Like call addChannelToUser
		}
	},

	mutations: {
		setChannels (state, channels) {
			state.channels = channels;
		},

		setCurrentChannel (state, channel) {
			state.currentChannel = channel;
		}
	}
};
