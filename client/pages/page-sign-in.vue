<template>
	<div>
		Please signin
		<form @submit.prevent="signIn">
			<div v-if="error">
				{{error}}
			</div>
			<input v-model="email" type="email" />
			<input v-model="password" type="password" />
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
