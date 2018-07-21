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
		getChannels ({commit}, {criteria = {}, update = false}) {
			return new Promise((resolve, reject) => {
				channelService.find({query: criteria}).then(result => {
					if (update) {
						commit("setChannels", result.data);
					}

					resolve(result);
				}).catch(err => {
					reject(err);
				});
			});
		},

		createChannel ({commit}, {title, userId}) {
			return channelService.create({
				title,
				admins: [userId]
			});
		},

		joinChannel ({commit, dispatch, rootState}, channelId) {
			channelService.patch(channelId, {$push: {users: rootState.user.id}});
		}
	},

	mutations: {
		setChannels (state, channels) {
			channels.map(channel => {
				channel.unread = 0;
			});
			state.channels = channels;
		},

		setCurrentChannel (state, channel) {
			channel.unread = 0;
			state.currentChannel = channel;
		},

		addUnreadMessage (state, channelId) {
			state.channels.find(channel => channel._id === channelId).unread++;
		}
	}
};
