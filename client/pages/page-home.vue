<template>
	<div>
		The Home Page! {{ this.$store.state.user.authenticated }}
		<button @click="authenticate">login</button>
		<button @click="signOut">logout</button>
		<button @click="createAccount('testsadsa')">createAccount</button>
		<button @click="getAccounts">getAccounts</button>

		<div v-for="account in userAccounts">
			{{ account }}
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		data () {
			return {
				userAccounts: []
			};
		},

		methods: {
			authenticate () {
				this.signIn({email: "test@test.com", password: "test"}).then(payload => {
					console.log("AUTHENTICATED");
				}).catch(err => {
					console.error(err);
				});
			},

			getAccounts () {
				this.accounts().then(accounts => {
					this.userAccounts = accounts.data;
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("user", {
				createAccount: "createAccount",
				signOut: "signOut",
				accounts: "getAccounts",
				signIn: "signIn"
			})
		}
	};
</script>

<style scoped>

</style>
