<template>
	<div>
		<div v-for="channel in userChannels">
			<Channel :channel="channel" :unread="channel.unread" @selectedChannel="selectedChannel" />
		</div>

		<button class="pad-top" @click="newChannel">New Channel</button>
		<button @click="viewChannels">View Channels</button>
		<ChannelLeaveButton />
	</div>
</template>

<script>
	import {mapActions, mapState, mapMutations} from "vuex";
	import Channel from "./channel";
	import ChannelLeaveButton from "./channel-leave-button";

	export default {
		computed: {
			...mapState({
				userId: state => state.user.id,
				userChannels: state => state.channels.channels
			})
		},

		created () {
			this.loadChannels();
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

			loadChannels () {
				console.log(this.userId);
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

			...mapActions("channels", ["getChannels"]),
			...mapMutations("channels", ["setCurrentChannel"])
		},

		components: {
			Channel,
			ChannelLeaveButton
		}
	};
</script>

<style scoped>
	button {
		width: 100%;
	}

	.pad-top {
		margin-top: 10px;
	}
</style>
