<template>
	<div>
		<div v-for="channel in channels">
			<Channel :channel="channel" @selectedChannel="joinChannel" />
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
			joinChannel (channel) {
				console.log("CHANNEL: ", channel);
			},

			...mapActions("channels", ["getChannels"])
		},

		components: {
			Channel
		}
	};
</script>

<style scoped>

</style>
