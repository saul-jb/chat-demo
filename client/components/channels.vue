<template>
	<div>
		<div v-for="channel in userChannels">
			<Channel :channel="channel" :unread="channel.unread" @selectedChannel="selectedChannel" />
		</div>

		<button @click="newChannel">New Channel</button>
		<button @click="viewChannels">View Channels</button>
	</div>
</template>

<script>
	import {mapActions, mapState, mapMutations} from "vuex";
	import Channel from "./channel";

	export default {
		data () {
			return {
			};
		},

		computed: {
			...mapState("user", {
				userId: "id"
			}),

			...mapState("channels", {
				userChannels: "channels"
			})
		},

		created () {
			this.getChannels({
				criteria: {
					$or: [
						{admins: this.userId},
						{users: this.userId}
					]
				},
				update: true
			}).catch(err => {
				console.error(err);
			});
		},

		methods: {
			selectedChannel (channel) {
				this.setCurrentChannel(channel);
			},

			newChannel () {
				this.$router.push({name: "CreateChannel"});
			},

			viewChannels () {
				this.$router.push({name: "ViewChannels"});
			},

			...mapActions("channels", ["getChannels"]),
			...mapMutations("channels", ["setCurrentChannel"])
		},

		components: {
			Channel
		}
	};
</script>

<style scoped>
	button {
		width: 100%;
	}
</style>
