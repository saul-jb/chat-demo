<template>
	<div>
		<div v-for="channel in userChannels">
			<Channel :channel="channel" :unread="channel.unread" @selectedChannel="selectedChannel" />
		</div>

		<button class="pad-top" @click="newChannel">New Channel</button>
		<button @click="viewChannels">View Channels</button>
		<button class="pad-top" @click="leaveChannel" :disabled="!this.currentChannel">{{ isAdmin ? "Delete Channel" : "Leave Channel" }}</button>
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
				userChannels: "channels",
				currentChannel: "currentChannel"
			}),

			isAdmin () {
				if (this.currentChannel) {
					return this.currentChannel.admins.includes(this.userId);
				}

				return false;
			}
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

			leaveChannel () {
				if (this.currentChannel) {
					if (this.isAdmin) {
						console.log("DELETEING CHANNEL")
						this.deleteChannel(this.currentChannel._id);
					} else {
						this.removeChannel(this.currentChannel._id).then(() => {
							console.log("LEAVING CHANNEL", this.currentChannel)
							return Promise.all([
								this.loadChannels(),
								this.setCurrentChannel(null)
							]);
						}).catch(err => {
							console.error(err);
						});
					}
				}
			},

			loadChannels () {
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

			...mapActions("channels", ["getChannels", "removeChannel", "deleteChannel"]),
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

	.pad-top {
		margin-top: 10px;
	}
</style>
