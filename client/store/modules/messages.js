import client from "@/libs/client";

const messagesService = client.service("messages");

export default {
	namespaced: true,

	state: {
		listening: false,
		messages: []
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

		startListening ({commit, state, rootState}) {
			if (!state.listening) {
				commit("setListening");

				client.service("messages").on("created", message => {
					if (rootState.channels.currentChannel && message.channel === rootState.channels.currentChannel._id) {
						commit("addMessage", message);
					} else {
						commit("channels/addUnreadMessage", message.channel, {root: true});
					}
				});
			}
		},

		getMessages ({commit}, criteria) {
			return messagesService.find({query: criteria});
		}
	},

	mutations: {
		setListening (state) {
			state.listening = true;
		},

		setMessages (state, messages) {
			state.messages = messages;
		},

		addMessage (state, message) {
			state.messages.push(message);
		}
	}
};
