<template>
	<div>
		<button @click="getUserChannels">getUserChannels</button>

		<div v-for="channel in userChannels">
			<Channel :channel="channel" />
		</div>

		<router-link :to="{ name: 'CreateChannel', params: {} }">Create channel</router-link>
	</div>
</template>

<script>
	import {mapActions, mapState} from "vuex";
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

		methods: {
			getUserChannels () {
				this.getChannels({admins: this.userId}).catch(err => {
					console.error(err);
				});
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
