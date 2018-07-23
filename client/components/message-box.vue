<template>
	<div id="message-box">
		<textarea-autosize
			class="input-field"
			placeholder="Type something here..."
			v-model="text"
			:min-height="40"
			:max-height="100"
			@keydown.enter="send"
		></textarea-autosize>
		<button class="send-button" @click.prevent="send" :disabled="!currentChannel">Send</button>
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
	#message-box {
		display: flex;
	}

	.input-field {
		flex: 1;

		resize: none;

		padding: 0;
		margin: 0;
	}

	.send-button {
		max-height: 40px;
		height: 40px;
		width: 40px;

		margin-top: auto;
	}
</style>
