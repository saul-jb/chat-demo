<template>
	<div>
		Please register
		<form @submit.prevent="createAccount">
			<div v-if="error">
				{{error}}
			</div>
			<input v-model="email" type="email" />
			<input v-model="password" type="password" />
			<input v-model="username" type="text" />
			<button>Submit</button>
		</form>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		data () {
			return {
				username: "",
				email: "",
				password: "",
				error: null
			};
		},

		methods: {
			createAccount () {
				this.createUserAccount({
					username: this.username,
					password: this.password,
					email: this.email
				}).then(() => {
					this.$router.push({name: "Chat"});
				}).catch(err => {
					this.error = err.message;
				});
			},
			...mapActions("user", {
				createUserAccount: "createAccount"
			})
		}
	};
</script>

<style scoped>

</style>
