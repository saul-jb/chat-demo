<template>
	<div class="page flex-center">
		<form class="form-main" @submit.prevent="signIn">
			<h2 class="form-heading">Sign In</h2>
			<div class="error" v-if="error">
				{{error}}
			</div>
			<label class="form-label" for="email">
				Email:
				<input class="form-input" required v-model="email" type="email" id="username" />
			</label>
			<label class="form-label" for="password">
				Password:
				<input class="form-input" required v-model="password" type="password" id="password" />
			</label>
			<button class="form-button">Submit</button>
		</form>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		data () {
			return {
				email: null,
				password: null,
				error: null
			};
		},

		methods: {
			signIn () {
				this.error = null;

				this.signUserIn({
					email: this.email,
					password: this.password
				}).then(() => {
					this.password = null;

					this.$router.push({name: "Chat"});
				}).catch(err => {
					this.error = err.message;
				});
			},

			...mapActions("user", {
				signUserIn: "signIn"
			})
		}
	};
</script>

<style scoped>
</style>
