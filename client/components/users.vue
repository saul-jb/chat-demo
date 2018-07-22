<template>
	<div>
		Users:
		<div v-for="user in users">
			<User :user="user" />
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from "vuex";
	import User from "./user";

	export default {
		data () {
			return {
				users: []
			};
		},

		computed: {
			...mapState("channels", ["currentChannel"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				if (newChannel) {
					this.getAccounts({channels: newChannel._id}).then(res => {
						this.users = res.data;
					}).catch(err => {
						console.error(err);
					});
				} else {
					this.users = [];
				}
			}
		},

		methods: {
			...mapActions("user", ["getAccounts"])
		},

		components: {
			User
		}
	};
</script>

<style scoped>

</style>
