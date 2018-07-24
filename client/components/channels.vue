<template>
	<div id="channels">
		<div v-for="channel in userChannels">
			<Channel :channel="channel" :unread="channel.unread" @selectedChannel="selectedChannel" />
		</div>

		<div class="pad-top channel-button" @click="newChannel">New Channel</div>
		<div class="channel-button" @click="viewChannels">View Channels</div>
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
	.pad-top {
		margin-top: 10px;
	}

	#channels {
		display: flex;
		flex-direction: column;

		padding: 4px;
	}
</style>

<style>
	.channel-button {
		cursor: pointer;

		border: 1px solid #0066cc;
		color: #0066cc;

		display: flex;
		justify-content: center;
		align-items: center;

		margin-bottom: 5px;
		padding: 3px;

		transition: background-color 0.2s ease-in-out, color 0.1s ease-in-out;
	}

	.channel-button:hover {
		background-color: #0080ff;
		color: white;
	}
</style>
