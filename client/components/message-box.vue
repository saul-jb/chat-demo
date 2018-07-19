<template>
	<div>
		message box
		<textarea v-model="text" />
		<button @click.prevent="send" :disabled="!currentChannel">Send</button>
	</div>
</template>

<script>
	import {mapState, mapActions} from "vuex";

	export default {
		data () {
			return {
				text: ""
			};
		},

		computed: {
			...mapState("channels", ["currentChannel"]),
			...mapState("user", ["id"])
		},

		methods: {
			send () {
				this.createMessage({
					text: this.text,
					userId: this.id,
					channelId: this.currentChannel._id
				}).then(res => {
					console.log(res);
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("messages", ["createMessage"])
		}
	};
</script>

<style scoped>

</style>
