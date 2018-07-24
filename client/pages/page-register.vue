<template>
	<div class="page flex-center">
		<form class="form-main">
			<h2 class="form-heading">Register</h2>
			<div class="error" v-if="error">
				{{error}}
			</div>
			<label class="form-label" for="username">
				Username:
				<input class="form-input" required v-model="username" type="text" id="username" />
			</label>
			<label class="form-label" for="password">
				Password:
				<input class="form-input" required v-model="password" type="password" id="password" />
			</label>
			<label class="form-label" for="email">
				Email:
				<input class="form-input" required v-model="email" type="email" id="email" />
			</label>
			<div @click.prevent="createAccount" class="form-button">Submit</div>
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
				error: ""
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
