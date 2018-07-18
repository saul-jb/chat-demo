<template>
	<div>
		The Home Page!
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
			getAccounts () {
				this.accounts().then(accounts => {
					this.userAccounts = accounts.data;
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("user", {
				accounts: "getAccounts"
			})
		}
	};
</script>

<style scoped>

</style>
