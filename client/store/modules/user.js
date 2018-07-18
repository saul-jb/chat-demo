import client from "@/libs/client";

const userService = client.service("users");

export default {
	namespaced: true,

	state: {
		authenticated: false
	},

	getters: {

	},

	actions: {
		createAccount ({commit}, {username, password, email}) {
			return new Promise((resolve, reject) => {
				userService.create({
					email,
					username,
					password
				}).then(user => {
					commit("setAuthState", true);

					resolve(user);
				}).catch(err => {
					reject(err);
				});
			});
		},

		signIn ({commit}, {email, password}) {
			return new Promise((resolve, reject) => {
				// Attempt sign in with saved token
				client.authenticate().then(payload => {
					commit("setAuthState", true);

					resolve(payload);
				}).catch(err => {
					// Sign in with email and password
					if (email && password) {
						client.authenticate({
							strategy: "local",
							email,
							password
						}).then(payload => {
							commit("setAuthState", true);

							resolve(payload);
						}).catch(err => {
							reject(err);
						});
					} else {
						reject(err);
					}
				});
			});
		},

		signOut ({commit}) {
			commit("setAuthState", false);

			client.logout();
		},

		getAccounts () {
			return userService.find();
		}
	},

	mutations: {
		setAuthState (state, value) {
			state.authenticated = value;
			console.log(state.authenticated);
		}
	}
};
