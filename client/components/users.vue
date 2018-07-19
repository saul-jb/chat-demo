<template>
	<div>
		Users list
		<div v-for="user in users">
			{{ user }}
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from "vuex";

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
				console.log(newChannel._id);
				this.getAccounts({channels: newChannel._id}).then(res => {
					this.users = res.data;
					console.log(res);
				}).catch(err => {
					console.error(err);
				});
			}
		},

		methods: {
			...mapActions("user", ["getAccounts"])
		}
	};
</script>

<style scoped>

</style>
