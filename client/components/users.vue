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

		created () {
			if (this.currentChannel) {
				this.loadUsers(this.currentChannel._id);
			}
		},

		computed: {
			...mapState("channels", ["currentChannel"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				if (newChannel) {
					this.loadUsers(newChannel._id);
				} else {
					this.users = [];
				}
			}
		},

		methods: {
			loadUsers (channnelId) {
				this.getAccounts({channels: channnelId}).then(res => {
					this.users = res.data;
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("user", ["getAccounts"])
		},

		components: {
			User
		}
	};
</script>

<style scoped>

</style>
