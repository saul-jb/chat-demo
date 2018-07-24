<template>
	<div class="page">
		<template v-if="channels.length">
			<h2 class="channels-header">Join channels</h2>
			<div class="channel-grid">
				<div v-for="channel in channels">
					<Channel class="channel" :channel="channel" @selectedChannel="addChannel">
						<br />Users: {{channel.admins.length + channel.users.length}}
					</Channel>
				</div>
			</div>
		</template>
		<template v-else>
			<h2 class="channels-header">
				Congratulations!<br />
				You have joined all availible channels.
			</h2>

			<p class="channels-header">
				Consider <router-link :to="{ name: 'CreateChannel', params: {} }">creating one</router-link> instead?
			</p>
		</template>
	</div>
</template>

<script>
	import {mapActions, mapState} from "vuex";
	import Channel from "@/components/channel";

	export default {
		data () {
			return {
				channels: []
			};
		},

		computed: {
			...mapState("channels", {
				currentChannels: "channels"
			})
		},

		created () {
			this.loadChannels();
		},

		methods: {
			addChannel (channel) {
				this.joinChannel(channel._id).then(() => {
					this.channels = this.channels.filter(el => {
						return el._id !== channel._id;
					});
				}).catch(err => {
					console.error(err);
				});
			},

			loadChannels () {
				this.getChannels({}).then(channels => {
					this.channels = channels.data.filter(allChannelsEl => {
						return this.currentChannels.filter(currentChannelsEl => {
							return currentChannelsEl._id === allChannelsEl._id;
						}).length === 0;
					});
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("channels", ["getChannels", "joinChannel"])
		},

		components: {
			Channel
		}
	};
</script>

<style>
	.channel-grid .channel-button {
		height: 100px;
		max-width: 300px;
		min-width: 150px;
	}
</style>

<style scoped>
	.page {
		padding: 0 10%;
	}

	.channels-header {
		text-align: center;
	}

	.channel-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-template-rows: repeat(auto-fit, 1fr));
		grid-column-gap: 50px;
		grid-row-gap: 50px;

		justify-items: center;
	}
</style>
