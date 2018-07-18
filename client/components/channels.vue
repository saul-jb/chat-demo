<template>
	<div>
		<button @click="getUserChannels">getUserChannels</button>
		<button @click="newChannel">newChannel</button>

		<div v-for="channel in userChannels">
			{{ channel }}
		</div>
	</div>
</template>

<script>
	import {mapActions, mapState} from "vuex";

	export default {
		data () {
			return {
				userChannels: []
			};
		},

		computed: {
			...mapState("user", {
				userId: "id"
			})
		},

		methods: {
			getUserChannels () {
				this.getChannels({admins: this.userId}).then(channels => {
					console.log(channels);
					this.userChannels = channels.data;
				}).catch(err => {
					console.error(err);
				});
			},

			newChannel () {
				this.createChannel({title: "test", userId: this.userId}).then(channel => {
					this.getUserChannels();
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("channels", ["getChannels", "createChannel"])
		}
	};
</script>

<style scoped>

</style>
