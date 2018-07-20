<template>
	<div class="page">
		<form @submit.prevent="createAccount">
			<h2>Register</h2>
			<div class="error" v-if="error">
				{{error}}
			</div>
			<label for="username">
				Username:
				<input required v-model="username" type="text" id="username" />
			</label>
			<label for="password">
				Password:
				<input required v-model="password" type="password" id="password" />
			</label>
			<label for="email">
				Email:
				<input required v-model="email" type="email" id="email" />
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

	label {
		align-items: center;

		width: 100%;

		padding: 8px 0;
	}

	h2 {
		text-align: center;
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
