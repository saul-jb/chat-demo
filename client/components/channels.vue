<template>
	<div>
		<div v-for="channel in userChannels">
			<Channel :channel="channel" @selectedChannel="selectedChannel" />
		</div>

		<router-link :to="{ name: 'CreateChannel', params: {} }">Create channel</router-link>
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

			...mapActions("channels", ["getChannels"]),
			...mapMutations("channels", ["setCurrentChannel"])
		},

		components: {
			Channel
		}
	};
</script>

<style scoped>

</style>
