<template>
	<div class="page">
		<form @submit.prevent="signIn">
			<h2>Sign In</h2>
			<div class="error" v-if="error">
				{{error}}
			</div>
			<label for="email">
				Email:
				<input required v-model="email" type="email" id="username" />
			</label>
			<label for="password">
				Password:
				<input required v-model="password" type="password" id="password" />
			</label>
			<button>Submit</button>
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
	.page {
		display: flex;
		align-items: center;
	}

	form {
		width: 60%;
		max-width: 400px;

		margin: auto;

		display: flex;
		flex-direction: column;
	}

	h2 {
		text-align: center;
	}

	label {
		align-items: center;

		width: 100%;

		padding: 8px 0;
	}

	.error {
		border: 1px solid red;
		padding: 10px;

		text-align: center;

		background-color: #ff9999;
	}

	input {
		width: 100%;
	}

	button {
		margin-top: 10px;
	}
</style>
