<template>
	<div>
		<textarea @keydown.enter="send" v-model="text" /><button @click.prevent="send" :disabled="!currentChannel">Send</button>
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
			...mapState({
				currentChannel: state => state.channels.currentChannel,
				id: state => state.user.id
			})
		},

		methods: {
			send () {
				if (this.currentChannel) {
					this.createMessage({
						text: this.text,
						userId: this.id,
						channelId: this.currentChannel._id
					}).then(() => {
						this.text = "";
					}).catch(err => {
						console.error(err);
					});
				}
			},

			...mapActions("messages", ["createMessage"])
		}
	};
</script>

<style scoped>
	textarea {
		resize: none;
		width:90%;
		height: 98%;
	}

	button {
		width:10%;
		height: 98%;
	}
</style>
