<template>
	<div>
		<div v-for="channel in channels">
			<Channel :channel="channel" @selectedChannel="addChannel" />
		</div>
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

		methods: {
			addChannel (channel) {
				console.log("CHANNEL: ", channel);
				this.joinChannel(channel._id);
			},

			...mapActions("channels", ["getChannels", "joinChannel"])
		},

		components: {
			Channel
		}
	};
</script>

<style scoped>

</style>
