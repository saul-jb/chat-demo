<template>
	<div>
		<div v-for="channel in userChannels">
			<Channel :channel="channel" @selectedChannel="selectedChannel" />
		</div>

		<button @click="newChannel">New Channel</button>
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
					admins: this.userId
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
